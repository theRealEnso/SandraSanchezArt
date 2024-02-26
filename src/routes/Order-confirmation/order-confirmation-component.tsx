import {useNavigate} from  'react-router-dom';

import { OrderConfirmationContainer, ReturnToHomeButton, ButtonContainer } from "./order-confirmation.styles";
import { BUTTON_STYLE_CLASSES } from "../../components/Button/button-style-classes";

const OrderConfirmation = () => {
    const navigate = useNavigate();

    const returnToHomePage = () => {
        navigate(`/`);
    }
    return (
        <OrderConfirmationContainer>
            <h1>Payment was successful!</h1>
            <p>An order confirmation email has been sent out to you. Please check your email and retain the receipt for your records</p>

            <ButtonContainer>
                <ReturnToHomeButton buttonType={BUTTON_STYLE_CLASSES.google} onClick={returnToHomePage}>Return to Home</ReturnToHomeButton>
            </ButtonContainer>
        </OrderConfirmationContainer>
    )
}

export default OrderConfirmation;