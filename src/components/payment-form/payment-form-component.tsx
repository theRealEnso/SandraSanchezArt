import { CardElement} from "@stripe/react-stripe-js";

import {PaymentButton, PaymentFormContainer} from './payment-form.styles'
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

const PaymentForm = () => {

    return (
        <PaymentFormContainer>
            <h2>Credit Card Payment:</h2>
            <CardElement></CardElement>
            <PaymentButton buttonType={BUTTON_STYLE_CLASSES.google}>PAY NOW</PaymentButton>
        </PaymentFormContainer>
    )
};

export default PaymentForm;