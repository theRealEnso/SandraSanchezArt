import { useContext, FC, ChangeEvent } from "react";
import { SummaryItemContainer, ImageContainer, ProductNameContainer, SummaryInputContainer, ItemPriceContainer, IconContainer, RemoveIcon } from "./summary-item-styles";
import { QuantityButton, QuantityInput} from "../../routes/Product-details/product-details.styles";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import { CartItemProps } from "../cart-item/cart-item-component";
import { Product } from "../../contexts/shopping-cart-context";

const SummaryItem: FC<CartItemProps> = ({cartItem}) => {
    const {imageUrl, itemPrice, name, quantity, selectedSize, id, key} = cartItem;
    const {cartItems, setCartItems, addOneItemToCart, removeOneItemFromCart, clearItemFromCart} = useContext(ShoppingCartContext);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuantity = event.target.value;
        const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize && cartItem.key === key);

        if(/^\d*$/.test(newQuantity) && itemExistsInCart){
            const updatedSummaryItems = cartItems.map((cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize && cartItem.key === key
                ? {...cartItem, quantity: newQuantity === "" ? "" : parseInt(newQuantity, 10)} as Product
                : cartItem
            )

            setCartItems(updatedSummaryItems)
        }
    };

    const handleDecrement = () => removeOneItemFromCart(cartItem,selectedSize, key);
    
    const handleIncrement = () => addOneItemToCart(cartItem, selectedSize, key);

    const deleteItemFromCart = () => clearItemFromCart(cartItem, key);


    return (
        <SummaryItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}></img>
            </ImageContainer>
            

            <ProductNameContainer>
                <h2>{name}</h2>
                <h4>{selectedSize}</h4>
            </ProductNameContainer>

            <SummaryInputContainer>
                <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={handleDecrement}>-</QuantityButton>
                <QuantityInput  type="number" value={quantity} onChange={handleInputChange}></QuantityInput>
                <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={handleIncrement}>+</QuantityButton>
            </SummaryInputContainer>

            <ItemPriceContainer>
                <span>$ {quantity * itemPrice}</span>
            </ItemPriceContainer>
            
            <IconContainer onClick={deleteItemFromCart}>
                <RemoveIcon fontSize="large"></RemoveIcon>
            </IconContainer>
            
        </SummaryItemContainer>
    );
};

export default SummaryItem;