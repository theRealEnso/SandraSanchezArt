import { useContext } from "react";
import { CartItemContainer, TitleContainer, ImageContainer } from "./cart-item.styles";

import { InputContainer, QuantityInput, QuantityButton } from "../../routes/Product-details/product-details.styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

const CartItem = ({cartItem}) => {
    const {name, imageUrl, selectedSize, quantity} = cartItem;

    const {addOneItemToCart, removeOneItemFromCart} = useContext(ShoppingCartContext);
    const addOneItem = () => addOneItemToCart(cartItem);
    const removeOneItem = () => removeOneItemFromCart(cartItem);

    // console.log(cartItem);

    return (
        <CartItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}></img>
            </ImageContainer>
            

            <TitleContainer>
                <h3>{name}</h3>
                <span>{selectedSize}</span>
            </TitleContainer>

            <InputContainer>
                <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={removeOneItem}>-</QuantityButton>
                <QuantityInput value={quantity}></QuantityInput>
                <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={addOneItem}>+</QuantityButton>
            </InputContainer>
            
        </CartItemContainer>
    );
};

export default CartItem;