import { useEffect, useState, FormEvent } from "react";
import { PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./updated-payment-form-styles";

const UpdatedPaymentForm = () => {

    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    
    //create payment intent on the server
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
    
        const paymentResult = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: ""
            }
        });
    
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
            <FormContainer>
                <PaymentElement></PaymentElement>
                <button id="submit">Submit</button>
            </FormContainer>

        </PaymentFormContainer>
    )
}

export default UpdatedPaymentForm;

