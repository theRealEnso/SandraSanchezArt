import { useRef, useState, forwardRef, Ref, FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, ListContainer, SubTotalContainer } from "./cart-dropdown-styles";

import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import CartItem from "../cart-item/cart-item-component";

import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import Button from "../Button/button-component";

//_ replaces props. The underscore means that we are aware of the `prop` parameter, but we don't need to use it
export const CartDropdown: FC = forwardRef<HTMLDivElement>((props, ref: Ref<HTMLDivElement>) => {
    const {close} = props;

    // const viewCartSummaryBtnRef = useRef()
    const navigate = useNavigate();

    const {cartItems, cartTotal} = useContext(ShoppingCartContext);
    console.log(cartItems);

    const handleNavigateToCartSummaryPage = () => {
        navigate(`/cart-summary`);
        close();
    }

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
                <Button buttonType={BUTTON_STYLE_CLASSES.google} onClick={handleNavigateToCartSummaryPage}>View Cart Summary</Button>
            </SubTotalContainer>

            
            
        </CartDropdownContainer>
    );
});

export default CartDropdown;