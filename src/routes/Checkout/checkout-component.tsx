import { CheckoutContainer } from "./checkout-styles";
import UpdatedPaymentForm from "../../components/payment-form/updated-payment-form-component";
import CheckoutSummary from "../../components/Checkout-summary/checkout-summary-component";

const Checkout = () => {

    return (
        <CheckoutContainer>
            <UpdatedPaymentForm></UpdatedPaymentForm>
            <CheckoutSummary></CheckoutSummary>
        </CheckoutContainer>
        
    );
};

export default Checkout;
