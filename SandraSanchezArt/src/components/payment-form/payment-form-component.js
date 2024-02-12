import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardElement } from "@stripe/react-stripe-js";
import { PaymentButton, PaymentFormContainer } from './payment-form.styles';
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
const PaymentForm = () => {
    return (_jsxs(PaymentFormContainer, { children: [_jsx("h2", { children: "Credit Card Payment:" }), _jsx(CardElement, {}), _jsx(PaymentButton, { buttonType: BUTTON_STYLE_CLASSES.google, children: "PAY NOW" })] }));
};
export default PaymentForm;
