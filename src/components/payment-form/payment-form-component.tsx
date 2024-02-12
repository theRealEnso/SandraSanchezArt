import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import {PaymentButton, PaymentFormContainer, FormContainer} from './payment-form.styles'
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (event) => {
        event.preventDefault();

        if(!stripe || !elements) return;

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: 10000})
        }).then(response => response.json());

        const {paymentIntent: {client_secret}} = response;
        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Ben Vu",
                },
            },
        });

        if(paymentResult.error){
            alert(paymentResult.error)
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert("Payment Successful!")
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={handlePayment}>
                <h2>Credit Card Payment:</h2>
                <CardElement></CardElement>
                <PaymentButton buttonType={BUTTON_STYLE_CLASSES.google}>PAY NOW</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
};

export default PaymentForm;