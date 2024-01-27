import { CartDropdownContainer } from "./cart-dropdown-styles";

import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import CartItem from "../cart-item/cart-item-component";

export const CartDropdown = () => {
    const {cartItems} = useContext(ShoppingCartContext);
    console.log(cartItems);

    return (
        <CartDropdownContainer>
            {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)}
        </CartDropdownContainer>
    );
};

export default CartDropdown;