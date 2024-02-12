import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, ListContainer, SubTotalContainer } from "./cart-dropdown-styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";
import CartItem from "../cart-item/cart-item-component";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import Button from "../Button/button-component";
//_ replaces props. The underscore means that we are aware of the `prop` parameter, but we don't need to use it
export const CartDropdown = forwardRef((_, ref) => {
    const navigate = useNavigate();
    const { cartItems, cartTotal } = useContext(ShoppingCartContext);
    console.log(cartItems);
    const handleNavigateToCartSummaryPage = () => navigate(`/cart-summary`);
    return (_jsxs(CartDropdownContainer, { ref: ref, children: [_jsx(ListContainer, { children: cartItems.length
                    ? (cartItems.map((cartItem) => _jsx(CartItem, { cartItem: cartItem }, cartItem.key)))
                    : _jsx("span", { children: "Your cart is currently empty!" }) }), _jsxs(SubTotalContainer, { children: [_jsxs("h3", { children: ["Sub-total: $", cartTotal, " "] }), _jsx(Button, { buttonType: BUTTON_STYLE_CLASSES.google, onClick: handleNavigateToCartSummaryPage, children: "View Cart Summary" })] })] }));
});
export default CartDropdown;
