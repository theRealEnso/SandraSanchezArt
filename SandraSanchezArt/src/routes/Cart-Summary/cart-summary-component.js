import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SummaryContainer, CheckoutContainer, ShoppingCartContainer, ButtonContainer, CheckoutButton, ReturnHomeButton } from "./cart-summary-styles";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";
import SummaryItem from "../../components/Summary-item/summary-item-component";
import { BUTTON_STYLE_CLASSES } from "../../components/Button/button-style-classes";
const CartSummary = () => {
    const navigate = useNavigate();
    const { cartItems, cartTotal } = useContext(ShoppingCartContext);
    const navigateToHome = () => navigate(`/`);
    const navigateToCheckout = () => navigate(`/checkout`);
    return (_jsxs(SummaryContainer, { children: [_jsxs(CheckoutContainer, { children: [_jsx("h1", { children: "SHOPPING CART" }), _jsx(ShoppingCartContainer, { children: cartItems.map((cartItem) => (_jsx(SummaryItem, { cartItem: cartItem }, cartItem.key))) })] }), _jsxs("span", { children: ["Sub-total: $ ", cartTotal] }), _jsxs(ButtonContainer, { children: [_jsx(ReturnHomeButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: navigateToHome, children: "Return to Home" }), _jsx(CheckoutButton, { buttonType: BUTTON_STYLE_CLASSES.google, onClick: navigateToCheckout, children: "Checkout" })] })] }));
};
export default CartSummary;
