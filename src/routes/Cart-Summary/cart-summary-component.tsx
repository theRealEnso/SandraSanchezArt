import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SummaryContainer, CheckoutContainer, ShoppingCartContainer, ButtonContainer, CheckoutButton, ReturnHomeButton } from "./cart-summary-styles";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import SummaryItem from "../../components/Summary-item/summary-item-component";

import { BUTTON_STYLE_CLASSES } from "../../components/Button/button-style-classes";

const CartSummary = () => {
    const navigate = useNavigate();

    const {cartItems, cartTotal} = useContext(ShoppingCartContext);

    const navigateToHome = () => navigate(`/`);
    const navigateToCheckout = () => navigate(`/checkout`);

    return (
        <SummaryContainer>
            <CheckoutContainer>
                <h1>SHOPPING CART</h1>

                <ShoppingCartContainer>
                    {cartItems.map((cartItem) => (<SummaryItem key={cartItem.key} cartItem={cartItem}></SummaryItem>) )}
                </ShoppingCartContainer>
            </CheckoutContainer>

            <span>Sub-total: $ {cartTotal}</span>

            <ButtonContainer>
                <ReturnHomeButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={navigateToHome}>Return to Home</ReturnHomeButton>
                <CheckoutButton buttonType={BUTTON_STYLE_CLASSES.google} onClick={navigateToCheckout}>Checkout</CheckoutButton>
            </ButtonContainer>

        </SummaryContainer>

    );
};

export default CartSummary;