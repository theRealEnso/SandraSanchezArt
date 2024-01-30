import { CartDropdownContainer, ListContainer, SubTotalContainer } from "./cart-dropdown-styles";

import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import CartItem from "../cart-item/cart-item-component";

export const CartDropdown = () => {
    const {cartItems} = useContext(ShoppingCartContext);
    console.log(cartItems);

    return (
        <CartDropdownContainer>
            <ListContainer>
                {cartItems ? (cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}></CartItem>)) : <span>Your cart is currently empty!</span>} 
            </ListContainer>

            <SubTotalContainer>
                <h2>Sub-total: </h2>
            </SubTotalContainer>
            
        </CartDropdownContainer>
    );
};

export default CartDropdown;