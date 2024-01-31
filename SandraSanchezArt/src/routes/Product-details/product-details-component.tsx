import {useState, useContext, useEffect, FC, ChangeEvent} from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import {v4 as uuidv4} from 'uuid';

import { ProductDetailsContainer, ImageContainer, DetailsContainer, SelectionContainer, OptionsContainer, QuantityContainer, InputContainer, QuantityInput, QuantityButton, AddToCartButton, DescriptionContainer } from './product-details.styles';

// import Button from '../../components/Button/button-component';
import { BUTTON_STYLE_CLASSES } from '../../components/Button/button-style-classes';

import { ShoppingCartContext } from '../../contexts/shopping-cart-context';

type SizeAndPriceProps = {
    size: string;
    price: number;
};


const ProductDetails: FC = () => {
    const {addProductAndQuantityToCart, setCartItemIsAdded} = useContext(ShoppingCartContext);

    const location = useLocation();
    const {product} = location.state;

    const {name, imageUrl, sizesAndPrices, description} = product;

    const parsedDescription = parse(description);

    const defaultPrice = sizesAndPrices[0].price;

    const [price, setPrice] = useState(defaultPrice);
    const [selectedSize, setSelectedSize] = useState(sizesAndPrices[0].size);
    const [quantity, setQuantity] = useState<number | "">(1);
    const [key, setKey] = useState(uuidv4());

    useEffect(() => {
        setKey(uuidv4());
    }, [selectedSize])

    const handleUserSelection = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSize = event.target.value;
        // console.log(selectedSize);
        const selectedSizeObject = sizesAndPrices.find((sizeAndPrice: SizeAndPriceProps) => sizeAndPrice.size === selectedSize ) // spits out 1st array element that returns true
        console.log(selectedSizeObject);

        // update price state to reflect the value of the selected product
        if(selectedSizeObject){
            setSelectedSize(selectedSizeObject.size);
            setPrice(selectedSizeObject.price);
        }
    };

    console.log(price);

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuantity = event.target.value; // value is of string data type
        console.log(typeof newQuantity);

        //check if newQuantity is a either a empty string or if string comsists of digits 0-9. Update `quantity` as empty string if empty is received. Otherwise, update quantity as the the parsed integer value of the string
        if (/^\d*$/.test(newQuantity)) {
            setQuantity(newQuantity === '' ? '' : parseInt(newQuantity, 10));
        }

        //notes:
        // /^\d*$/:
        // /: Delimiters for the regex pattern.
        // ^: Anchors the match at the beginning of the string.
        // \d*: Matches any digit (\d) zero or more times (*).
        // $: Anchors the match at the end of the string.
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
            addProductAndQuantityToCart(product, selectedSize, price, quantity, key);
            setQuantity(1);
            setCartItemIsAdded(true);

            setTimeout(() => setCartItemIsAdded(false), 3000);
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
                            <QuantityInput type="number" value={quantity} onChange={handleQuantityChange}></QuantityInput>
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