import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { SummaryItemContainer, ImageContainer, ProductNameContainer, SummaryInputContainer, ItemPriceContainer } from "./summary-item-styles";
import { QuantityButton, QuantityInput } from "../../routes/Product-details/product-details.styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";
const SummaryItem = ({ cartItem }) => {
    const { imageUrl, itemPrice, name, quantity, selectedSize, id, key } = cartItem;
    const { cartItems, setCartItems, addOneItemToCart, removeOneItemFromCart } = useContext(ShoppingCartContext);
    const handleInputChange = (event) => {
        const newQuantity = event.target.value;
        const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize && cartItem.key === key);
        if (/^\d*$/.test(newQuantity) && itemExistsInCart) {
            const updatedSummaryItems = cartItems.map((cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize && cartItem.key === key
                ? { ...cartItem, quantity: newQuantity === "" ? "" : parseInt(newQuantity, 10) }
                : cartItem);
            setCartItems(updatedSummaryItems);
        }
    };
    const handleDecrement = () => removeOneItemFromCart(cartItem, selectedSize, key);
    const handleIncrement = () => addOneItemToCart(cartItem, selectedSize, key);
    return (_jsxs(SummaryItemContainer, { children: [_jsx(ImageContainer, { children: _jsx("img", { src: imageUrl, alt: name }) }), _jsxs(ProductNameContainer, { children: [_jsx("h2", { children: name }), _jsx("h4", { children: selectedSize })] }), _jsxs(SummaryInputContainer, { children: [_jsx(QuantityButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: handleDecrement, children: "-" }), _jsx(QuantityInput, { type: "number", value: quantity, onChange: handleInputChange }), _jsx(QuantityButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: handleIncrement, children: "+" })] }), _jsx(ItemPriceContainer, { children: _jsxs("span", { children: ["$ ", quantity * itemPrice] }) })] }));
};
export default SummaryItem;
