import { useContext, ChangeEvent, FC, MouseEvent} from "react";
import { CartItemContainer, TitleContainer, ImageContainer } from "./cart-item.styles";

import { InputContainer, QuantityInput, QuantityButton } from "../../routes/Product-details/product-details.styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import { Product } from "../../contexts/shopping-cart-context";

export type CartItemProps = {
    cartItem: Product;
};

const CartItem: FC<CartItemProps> = ({cartItem}) => {
    const {name, imageUrl, selectedSize, quantity, id, key} = cartItem;

    const {addOneItemToCart, removeOneItemFromCart, cartItems, setCartItems } = useContext(ShoppingCartContext);

    const addOneItem = () => {
        addOneItemToCart(cartItem, selectedSize, key);
    };

    const removeOneItem = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        removeOneItemFromCart(cartItem, selectedSize, key);
    };
    
    const handleQuantityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const itemExistsInCart = cartItems.find((cartItem) => cartItem.key === key && cartItem.id === id && cartItem.selectedSize === selectedSize);
        const newAmount = event.target.value;
    
        if (/^\d*$/.test(newAmount) && itemExistsInCart) { // returns boolean, check if inputted value is empty string or contains digits 0-9
            const updatedCartItems = cartItems.map((cartItem) => cartItem.key === key && cartItem.id === id && cartItem.selectedSize === selectedSize 
                ? { ...cartItem, quantity: newAmount === '' ? '' : parseInt(newAmount, 10) } as Product
                : cartItem
            );

            setCartItems(updatedCartItems);
        }
    };
    

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
                <QuantityInput value={quantity} onChange={handleQuantityInputChange}></QuantityInput>
                <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={addOneItem}>+</QuantityButton>
            </InputContainer>
            
        </CartItemContainer>
    );
};

export default CartItem;