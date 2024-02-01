import { forwardRef, Ref } from "react";
import { CartDropdownContainer, ListContainer, SubTotalContainer } from "./cart-dropdown-styles";

import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import CartItem from "../cart-item/cart-item-component";

import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import Button from "../Button/button-component";

//_ replaces props. The underscore means that we are aware of the `prop` parameter, but we don't need to use it
export const CartDropdown = forwardRef<HTMLDivElement>((_, ref: Ref<HTMLDivElement>) => {
    const {cartItems, cartTotal} = useContext(ShoppingCartContext);
    console.log(cartItems);

    return (
        <CartDropdownContainer ref={ref}>

            <ListContainer>
                {cartItems.length
                    ? (cartItems.map((cartItem) => <CartItem  key={cartItem.key} cartItem={cartItem}></CartItem>))
                    : <span>Your cart is currently empty!</span>
                }
            </ListContainer>

            <SubTotalContainer>
                <h3>Sub-total: ${cartTotal} </h3>
                <Button buttonType={BUTTON_STYLE_CLASSES.google}>Go to Checkout</Button>
            </SubTotalContainer>

            
            
        </CartDropdownContainer>
    );
});

export default CartDropdown;