import { useEffect, useState, FormEvent } from "react";
import { PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./updated-payment-form-styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

const UpdatedPaymentForm = () => {

    const [clientSecret, setClientSecret] = useState("");
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
                amount: 10000,
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
        
    },[])

    // confirm the payment on the client
    const handlePayment = async (event: FormEvent) => {
        event.preventDefault();
    
        if(!stripe || !elements) return;

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
        });

        console.log(paymentResult);
    
        if(paymentResult.error){
            alert(paymentResult.error)
        } else {
            if(paymentResult) {
                alert("Payment Successful!");
                console.log(paymentResult);
            };
        };
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={handlePayment}>
                <PaymentElement></PaymentElement>
                <PaymentButton buttonType={BUTTON_STYLE_CLASSES.google} id="submit">Submit</PaymentButton>
            </FormContainer>

        </PaymentFormContainer>
    )
}

export default UpdatedPaymentForm;

