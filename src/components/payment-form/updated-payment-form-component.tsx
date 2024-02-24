import { useEffect, useState, useContext, FormEvent, ChangeEvent } from "react";
import { useStripe, useElements, PaymentElement, AddressElement} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer, AddressElementContainer, PaymentElementContainer, PaymentButton, EmailContainer } from "./updated-payment-form-styles";
import { UpdatedCheckoutInput } from "./updated-payment-form-styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import ConfirmationEmail from "../Confirmation-email/confirmation-email-component";

const UpdatedPaymentForm = () => {
    const {cartTotal} = useContext(ShoppingCartContext)

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

            const response = await fetch('/.netlify/functions/send-email-with-resend', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    from: "sandrasanchezart.space",
                    to: emailInput,
                    subject: 'Payment and Order Confirmation for Sandra Sanchez Art',
                    react: ConfirmationEmail()
                })
            });

            if(!response.ok) {
                console.error(`Faled to send email!`);
                setIsProcessing(false);
                return;
            }

            console.log(`Successfully sent email!`);

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

// const paymentResult = await stripe.confirmPayment({
//     elements,
//     clientSecret,
//     confirmParams: {
//         return_url: "https://sandra-sanchez-art.netlify.app",
//     }
// })
// .then((result) => {
//     if(result.error){
//         console.log(result.error);
//         alert(`There was an error: ${result.error}`)
//     }

//     console.log(result);
// }).then(() => {
//     fetch('/.netlify/functions/send-email', {
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             subject: 'Payment and Order Confirmation',
//             recipient: {emailInput},
//             message: `Your payment was successful! `
//         })
//     }).then((result) => {
//         if(!result.ok){
//             console.error('Failed to send email!');
//         } else {
//             console.log(`Successfully sent email!`)
//         }
//     })
// })

// setIsProcessing(false);
// console.log(paymentResult);

