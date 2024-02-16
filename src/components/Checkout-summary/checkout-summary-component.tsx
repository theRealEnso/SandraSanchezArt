import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import { CheckoutSummaryContainer } from "./checkout-summary-styles";

import CheckoutSummaryItem from "../Checkout-summary-item/checkout-summary-item-component";

const CheckoutSummary = () => {
    const {cartItems} = useContext(ShoppingCartContext);

    return (
        <CheckoutSummaryContainer>
            {cartItems.map((cartItem) => (<CheckoutSummaryItem key={cartItem.key} cartItem={cartItem}></CheckoutSummaryItem>))}
        </CheckoutSummaryContainer>
    )
};

export default CheckoutSummary;