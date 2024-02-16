import { useEffect, useState, useContext, FormEvent } from "react";
import { useStripe, useElements, PaymentElement, AddressElement} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer, AddressElementContainer, PaymentElementContainer, PaymentButton } from "./updated-payment-form-styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

const UpdatedPaymentForm = () => {
    const {cartTotal} = useContext(ShoppingCartContext)

    const [clientSecret, setClientSecret] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    
    //create payment intent with cartTotal amount to Netlify server
    //send this request to Netlify serverless function
    useEffect(() => {
        const response = fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: {cartTotal},
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // returns paymentIntent object
            const {paymentIntent: {client_secret}} = data;
            console.log(client_secret);
            setClientSecret(client_secret);
        })
        
        console.log(response);
        console.log(clientSecret);
        
    },[]);

    // confirm the payment on the client
    const handlePayment = async (event: FormEvent) => {
        event.preventDefault();
    
        if(!stripe || !elements) return;

        setIsProcessing(true);

        const {error: submitError} = await elements.submit();
        if(submitError){
            console.log(submitError);
            return;
        }
        
        const paymentResult = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: "https://sandra-sanchez-art.netlify.app",
            }
        })
        .then((result) => {
            if(result.error){
                console.log(result.error);
                alert(`There was an error: ${result.error}`)
            }

            console.log(result);
        })

        setIsProcessing(false);
        console.log(paymentResult);
    
        // if(paymentResult.error){
        //     alert(paymentResult.error)
        // } else {
        //     if(paymentResult) {
        //         alert("Payment Successful!");
        //         console.log(paymentResult);
        //     };
        // };
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={handlePayment}>
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

