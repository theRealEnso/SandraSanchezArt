import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { CartItemContainer, TitleContainer, ImageContainer } from "./cart-item.styles";
import { InputContainer, QuantityInput, QuantityButton } from "../../routes/Product-details/product-details.styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";
const CartItem = ({ cartItem }) => {
    const { name, imageUrl, selectedSize, quantity, id, key } = cartItem;
    const { addOneItemToCart, removeOneItemFromCart, cartItems, setCartItems } = useContext(ShoppingCartContext);
    const addOneItem = () => {
        addOneItemToCart(cartItem, selectedSize, key);
    };
    const removeOneItem = (event) => {
        event.stopPropagation();
        removeOneItemFromCart(cartItem, selectedSize, key);
    };
    const handleQuantityInputChange = (event) => {
        const itemExistsInCart = cartItems.find((cartItem) => cartItem.key === key && cartItem.id === id && cartItem.selectedSize === selectedSize);
        const newAmount = event.target.value;
        if (/^\d*$/.test(newAmount) && itemExistsInCart) { // returns boolean, check if inputted value is empty string or contains digits 0-9
            const updatedCartItems = cartItems.map((cartItem) => cartItem.key === key && cartItem.id === id && cartItem.selectedSize === selectedSize
                ? { ...cartItem, quantity: newAmount === '' ? '' : parseInt(newAmount, 10) }
                : cartItem);
            setCartItems(updatedCartItems);
        }
    };
    // console.log(cartItem);
    return (_jsxs(CartItemContainer, { children: [_jsx(ImageContainer, { children: _jsx("img", { src: imageUrl, alt: name }) }), _jsxs(TitleContainer, { children: [_jsx("h3", { children: name }), _jsx("span", { children: selectedSize })] }), _jsxs(InputContainer, { children: [_jsx(QuantityButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: removeOneItem, children: "-" }), _jsx(QuantityInput, { value: quantity, onChange: handleQuantityInputChange }), _jsx(QuantityButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: addOneItem, children: "+" })] })] }));
};
export default CartItem;
