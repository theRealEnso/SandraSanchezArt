import { CartDropdownContainer, ListContainer, SubTotalContainer } from "./cart-dropdown-styles";

import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import CartItem from "../cart-item/cart-item-component";

import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import Button from "../Button/button-component";

export const CartDropdown = () => {
    const {cartItems, cartTotal} = useContext(ShoppingCartContext);
    console.log(cartItems);

    return (
        <CartDropdownContainer>
            <ListContainer>
                {cartItems ? (cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}></CartItem>)) : <span>Your cart is currently empty!</span>} 
            </ListContainer>

            <SubTotalContainer>
                <h3>Sub-total: ${cartTotal} </h3>
                <Button buttonType={BUTTON_STYLE_CLASSES.google}>Go to Checkout</Button>
            </SubTotalContainer>
            
        </CartDropdownContainer>
    );
};

export default CartDropdown;