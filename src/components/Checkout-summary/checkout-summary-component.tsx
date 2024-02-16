import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import { CheckoutSummaryContainer, ListContainer, TotalContainer } from "./checkout-summary-styles";

import CheckoutSummaryItem from "../Checkout-summary-item/checkout-summary-item-component";

const CheckoutSummary = () => {
    const {cartItems, cartTotal} = useContext(ShoppingCartContext);

    return (
        <CheckoutSummaryContainer>
            <ListContainer>
                {cartItems.map((cartItem) => (<CheckoutSummaryItem key={cartItem.key} cartItem={cartItem}></CheckoutSummaryItem>))}

                <TotalContainer>
                    <h3>Subtotal</h3>
                    <h3>$ {cartTotal}</h3>
                </TotalContainer>
            </ListContainer>
        </CheckoutSummaryContainer>
    )
};

export default CheckoutSummary;