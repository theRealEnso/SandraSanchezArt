import { useContext, ChangeEvent, FC} from "react";
import { CartItemContainer, TitleContainer, ImageContainer } from "./cart-item.styles";

import { InputContainer, QuantityInput, QuantityButton } from "../../routes/Product-details/product-details.styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import { Product } from "../../contexts/shopping-cart-context";

type CartItemProps = {
    cartItem: Product
}

const CartItem: FC<CartItemProps> = ({cartItem}) => {
    const {name, imageUrl, selectedSize, quantity, id, key} = cartItem;

    const {addOneItemToCart, removeOneItemFromCart, cartItems, setCartItems } = useContext(ShoppingCartContext);

    const addOneItem = () => {
        addOneItemToCart(cartItem, selectedSize);
        // setAmount((quantity) => typeof quantity === "number" ? quantity + 1 : 1 );
        // // setAmount(quantity + 1);
    };

    const removeOneItem = () => {
        removeOneItemFromCart(cartItem, selectedSize, key);
        // setAmount((quantity) => typeof quantity === "number" ? quantity - 1 : 1);
        // // setAmount(quantity - 1);
    };
    
    const handleQuantityInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === id);
        const newAmount = event.target.value;
    
        if (/^\d*$/.test(newAmount) && itemExistsInCart) { // .test returns a boolean
            const updatedCartItems = cartItems.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: newAmount === '' ? '' : parseInt(newAmount, 10) } : cartItem);

            setCartItems(updatedCartItems);
            // setAmount(newAmount === '' ? '' : parseInt(newAmount, 10));
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