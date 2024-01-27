import {useState, useContext, FC, ChangeEvent} from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

import { ProductDetailsContainer, ImageContainer, DetailsContainer, SelectionContainer, OptionsContainer, QuantityContainer, InputContainer, QuantityInput, QuantityButton, AddToCartButton, DescriptionContainer } from './product-details.styles';

// import Button from '../../components/Button/button-component';
import { BUTTON_STYLE_CLASSES } from '../../components/Button/button-style-classes';

import { ShoppingCartContext } from '../../contexts/shopping-cart-context';

type SizeAndPriceProps = {
    size: string;
    price: number;
};


const ProductDetails: FC = () => {
    const {addProductToCart} = useContext(ShoppingCartContext);

    const location = useLocation();
    const {product} = location.state;

    const {name, imageUrl, sizesAndPrices, description} = product;

    const parsedDescription = parse(description);

    const defaultPrice = sizesAndPrices[0].price;

    const [price, setPrice] = useState(defaultPrice);
    const [selectedSize, setSelectedSize] = useState(sizesAndPrices[0].size);
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState<number | "">(1);

    const handleUserSelection = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSize = event.target.value;
        // console.log(selectedSize);
        const selectedSizeObject = sizesAndPrices.find((sizeAndPrice: SizeAndPriceProps) => sizeAndPrice.size === selectedSize ) // spits out 1st array element that returns true
        console.log(selectedSizeObject);

        // update price state to reflect the value of the selected product
        if(selectedSizeObject){
            setSelectedSize(selectedSizeObject.size);
            setPrice(selectedSizeObject.price);
            setItem(product);
        }
    };

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuantity = event.target.value;
        if (/^\d*$/.test(newQuantity)) {
            setQuantity(newQuantity === '' ? '' : parseInt(newQuantity, 10));
        }
    };

    const handleIncrement = () => {
        setQuantity((quantity) => typeof quantity === 'number' ? quantity + 1 : 1);

        // setQuantity(quantity + 1)
    };

    const handleDecrement = () => {
        setQuantity((quantity) => typeof quantity === 'number' && quantity > 1 ? quantity - 1 : 1);

        // if(quantity > 1){
        //     setQuantity(quantity - 1)
        // }
    };

    const addSelectedOptionAndQuantityToCart = () => {
        if(typeof quantity === "number" && quantity > 0){ // to fix type error, since quantity is defined to be a number or empty string in useState var
            addProductToCart(item, selectedSize, quantity);
        } else {
            console.log(`Invalid quantity: ${quantity}`);
        }
    };

    if(!product) { // put here instead of at top bc useState throws error
        return <h1>Whoops, looks like there was an error loading the page!</h1>
    }

    return (
        <ProductDetailsContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}></img>
            </ImageContainer>

            <DetailsContainer>
                <h2>{name}</h2>

                <h3>Price/item: $ {price}</h3>

                <SelectionContainer>
                    <OptionsContainer>
                        <label>OPTIONS</label>
                        <select value={selectedSize.size} onChange={handleUserSelection}>
                            {sizesAndPrices.map((sizeAndPrice: SizeAndPriceProps) => (
                                <option key={sizeAndPrice.size} value={sizeAndPrice.size}>{sizeAndPrice.size}</option>
                            ))}
                        </select>
                    </OptionsContainer>


                    <QuantityContainer>
                        <label>QUANTITY</label>
                        <InputContainer>
                            <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={handleDecrement}>-</QuantityButton>
                            <QuantityInput value={quantity} onChange={handleQuantityChange}></QuantityInput>
                            <QuantityButton buttonType={BUTTON_STYLE_CLASSES.default} onClick={handleIncrement}>+</QuantityButton>
                        </InputContainer>
                    </QuantityContainer>
                                
                    <AddToCartButton buttonType={BUTTON_STYLE_CLASSES.google} onClick={addSelectedOptionAndQuantityToCart}>Add to Cart</AddToCartButton>
                </SelectionContainer>

                <DescriptionContainer>{parsedDescription}</DescriptionContainer>


            </DetailsContainer>



        </ProductDetailsContainer>
    );
};

export default ProductDetails;