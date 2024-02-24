import { useEffect, useState, useContext, FormEvent, ChangeEvent } from "react";
import { useStripe, useElements, PaymentElement, AddressElement} from "@stripe/react-stripe-js";

import {render} from '@react-email/render';
import {SES} from '@aws-sdk/client-ses';

import { PaymentFormContainer, FormContainer, AddressElementContainer, PaymentElementContainer, PaymentButton, EmailContainer } from "./updated-payment-form-styles";
import { UpdatedCheckoutInput } from "./updated-payment-form-styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import ConfirmationEmail from "../../emails/confirmation-email-component";

const UpdatedPaymentForm = () => {

    const ses = new SES({ 
        region: process.env.VITE_REACT_APP_AWS_REGION,
        credentials: {
            accessKeyId: process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY_ID,
            secretAccessKey: process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
        }
    });

    const {cartTotal} = useContext(ShoppingCartContext);

    const [clientSecret, setClientSecret] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const total = cartTotal * 100;
    
    //create payment intent with cartTotal amount to Netlify server
    //send this request to Netlify serverless function
    useEffect(() => {
        const getStripePaymentIntent = async () => {
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: total,
                })
            });

            console.log(response);
            const data = await response.json();
    
            console.log(data); // returns paymentIntent object
    
            const {paymentIntent: {client_secret}} = data;
            console.log(client_secret);
            setClientSecret(client_secret);
        };
        getStripePaymentIntent();
    },[])

    // confirm the payment on the client
    const handlePayment = async (event: FormEvent) => {
        event.preventDefault();
    
        if(!stripe || !elements) return;

        setIsProcessing(true);

        const {error: submitError} = await elements.submit();
        if(submitError){
            console.log(submitError);
            setIsProcessing(false);
            return;
        }

        try {
            const paymentResult = await stripe.confirmPayment({
                elements,
                clientSecret,
                confirmParams: {
                    return_url: "https://sandra-sanchez-art.netlify.app",
                    payment_method_data: {
                        billing_details: {
                            email: emailInput,
                        }
                    }
                }
            });

            if(paymentResult.error){
                console.log(paymentResult.error);
                alert(`There was an error submitting payment: ${paymentResult.error}`);
                setIsProcessing(false);
                return;
            }

            console.log(paymentResult);

            const emailHtml = render(<ConfirmationEmail/>);
            const params = {
            Source: 'email@sandrasanchezart.space',
            Destination: {
                ToAddresses: [`${emailInput}`],
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: emailHtml,
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Payment Confirmation',
                },
            },
        };

        await ses.sendEmail(params);
            
        } catch (error) {
            console.error('Error processing payment or sending email:', error);
            setIsProcessing(false);
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = event.target.value;
        setEmailInput(newInputValue);

        console.log(emailInput);
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={handlePayment}>
                <EmailContainer>
                    <label id="contact-label">Contact</label>
                    <UpdatedCheckoutInput type="email" name="email" value={emailInput} placeholder="Email" onChange={handleInputChange} required></UpdatedCheckoutInput>
                </EmailContainer>


                <label>Delivery</label>

                <AddressElementContainer>
                    <AddressElement options={
                        {
                            mode: 'shipping', 
                            display: {name: "split"},
                            defaultValues: {
                                firstName: "ex: John",
                                lastName: "ex: Doe",
                                phone: "555-555-5555",
                            }, 

                            // address: {
                            //     line1: "",
                            //     line2: "",
                            //     city: "",
                            //     state: "",flex-direction: column;
                            //     postal_code: "",
                            //     country: "",
                            // },

                            fields: {phone: "always"}
                            }} onChange={(event) => {
                                if(event.complete){
                                    const address = event.value.address;
                                    console.log(address);
                                }
                            }}>
                    </AddressElement>
                </AddressElementContainer>

                <label>Payment Information:</label>

                <PaymentElementContainer>
                    <PaymentElement></PaymentElement>
                    <PaymentButton buttonType={BUTTON_STYLE_CLASSES.google} isLoading={isProcessing} id="submit">Pay Now</PaymentButton>
                </PaymentElementContainer>

            </FormContainer>

        </PaymentFormContainer>
    )
}

export default UpdatedPaymentForm;

// import { useEffect, useState, useContext, FormEvent, ChangeEvent } from "react";
// import { useStripe, useElements, PaymentElement, AddressElement} from "@stripe/react-stripe-js";

// import {render} from '@react-email/render';
// import {SES} from '@aws-sdk/client-ses';

// import { PaymentFormContainer, FormContainer, AddressElementContainer, PaymentElementContainer, PaymentButton, EmailContainer } from "./updated-payment-form-styles";
// import { UpdatedCheckoutInput } from "./updated-payment-form-styles";
// import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

// import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

// import ConfirmationEmail from '../../emails/confirmation-email-component';

// const ses = new SES({ 
//     region: process.env.VITE_REACT_APP_AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY_ID,
//         secretAccessKey: process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
//     }
// });

// const UpdatedPaymentForm = () => {
//     const {cartTotal} = useContext(ShoppingCartContext);

//     const [clientSecret, setClientSecret] = useState("");
//     const [isProcessing, setIsProcessing] = useState(false);
//     const [emailInput, setEmailInput] = useState("");
//     const stripe = useStripe();
//     const elements = useElements();
//     const total = cartTotal * 100;
    
//     //create payment intent with cartTotal amount to Netlify server
//     //send this request to Netlify serverless function
//     useEffect(() => {
//         const getStripePaymentIntent = async () => {
//             const response = await fetch('/.netlify/functions/create-payment-intent', {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     amount: total,
//                 })
//             });

//             console.log(response);
//             const data = await response.json();
    
//             console.log(data); // returns paymentIntent object
    
//             const {paymentIntent: {client_secret}} = data;
//             console.log(client_secret);
//             setClientSecret(client_secret);
//         };
//         getStripePaymentIntent();
//     },[])

//     // confirm the payment on the client
//     const handlePayment = async (event: FormEvent) => {
//         event.preventDefault();
    
//         if(!stripe || !elements) return;

//         setIsProcessing(true);

//         const {error: submitError} = await elements.submit();
//         if(submitError){
//             console.log(submitError);
//             setIsProcessing(false);
//             return;
//         }

//         try {
//             const paymentResult = await stripe.confirmPayment({
//                 elements,
//                 clientSecret,
//                 confirmParams: {
//                     return_url: "https://sandra-sanchez-art.netlify.app",
//                     payment_method_data: {
//                         billing_details: {
//                             email: emailInput,
//                         }
//                     }
//                 }
//             });

//             if(paymentResult.error){
//                 console.log(paymentResult.error);
//                 alert(`There was an error submitting payment: ${paymentResult.error}`);
//                 setIsProcessing(false);
//                 return;
//             }

//             const emailHtml = render(<ConfirmationEmail/>);
//             const params = {
//             Source: 'email@sandrasanchezart.space',
//             Destination: {
//                 ToAddresses: [`${emailInput}`],
//             },
//             Message: {
//                 Body: {
//                     Html: {
//                         Charset: 'UTF-8',
//                         Data: emailHtml,
//                     },
//                 },
//                 Subject: {
//                     Charset: 'UTF-8',
//                     Data: 'Payment Confirmation',
//                 },
//             },
//         };

//         await ses.sendEmail(params);

//         } catch (error) {
//             console.error('Error processing payment or sending email:', error);
//             setIsProcessing(false);
//         }
//     }

//     const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const newInputValue = event.target.value;
//         setEmailInput(newInputValue);

//         console.log(emailInput);
//     };