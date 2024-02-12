import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';
import { ProductDetailsContainer, ImageContainer, DetailsContainer, SelectionContainer, OptionsContainer, QuantityContainer, InputContainer, QuantityInput, QuantityButton, AddToCartButton, DescriptionContainer } from './product-details.styles';
// import Button from '../../components/Button/button-component';
import { BUTTON_STYLE_CLASSES } from '../../components/Button/button-style-classes';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context';
const ProductDetails = () => {
    const { addProductAndQuantityToCart, setCartItemIsAdded } = useContext(ShoppingCartContext);
    const location = useLocation();
    const { product } = location.state;
    const { name, imageUrl, sizesAndPrices, description } = product;
    const parsedDescription = parse(description);
    const defaultPrice = sizesAndPrices[0].price;
    const [price, setPrice] = useState(defaultPrice);
    const [selectedSize, setSelectedSize] = useState(sizesAndPrices[0].size);
    const [quantity, setQuantity] = useState(1);
    const [key, setKey] = useState(uuidv4());
    useEffect(() => {
        setKey(uuidv4());
    }, [selectedSize]);
    const handleUserSelection = (event) => {
        const selectedSize = event.target.value;
        // console.log(selectedSize);
        const selectedSizeObject = sizesAndPrices.find((sizeAndPrice) => sizeAndPrice.size === selectedSize); // spits out 1st array element that returns true
        console.log(selectedSizeObject);
        // update price state to reflect the value of the selected product
        if (selectedSizeObject) {
            setSelectedSize(selectedSizeObject.size);
            setPrice(selectedSizeObject.price);
        }
    };
    console.log(price);
    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value; // value is of string data type
        console.log(typeof newQuantity);
        //check if newQuantity is a either a empty string or if string consists of digits 0-9. Update `quantity` as empty string if empty is received. Otherwise, update quantity as the the parsed integer value of the string
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
        if (typeof quantity === "number" && quantity > 0) { // to fix type error, since quantity is defined to be a number or empty string in useState var
            addProductAndQuantityToCart(product, selectedSize, price, quantity, key);
            setQuantity(1);
            setCartItemIsAdded(true);
            setTimeout(() => setCartItemIsAdded(false), 3000);
        }
        else {
            console.log(`Invalid quantity: ${quantity}`);
        }
    };
    if (!product) { // put here instead of at top bc useState throws error
        return _jsx("h1", { children: "Whoops, looks like there was an error loading the page!" });
    }
    return (_jsxs(ProductDetailsContainer, { children: [_jsx(ImageContainer, { children: _jsx("img", { src: imageUrl, alt: name }) }), _jsxs(DetailsContainer, { children: [_jsx("h2", { children: name }), _jsxs("h3", { children: ["Price/item: $ ", price] }), _jsxs(SelectionContainer, { children: [_jsxs(OptionsContainer, { children: [_jsx("label", { children: "OPTIONS" }), _jsx("select", { value: selectedSize.size, onChange: handleUserSelection, children: sizesAndPrices.map((sizeAndPrice) => (_jsx("option", { value: sizeAndPrice.size, children: sizeAndPrice.size }, sizeAndPrice.size))) })] }), _jsxs(QuantityContainer, { children: [_jsx("label", { children: "QUANTITY" }), _jsxs(InputContainer, { children: [_jsx(QuantityButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: handleDecrement, children: "-" }), _jsx(QuantityInput, { type: "text", value: quantity, onChange: handleQuantityChange }), _jsx(QuantityButton, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: handleIncrement, children: "+" })] })] }), _jsx(AddToCartButton, { buttonType: BUTTON_STYLE_CLASSES.google, onClick: addSelectedOptionAndQuantityToCart, children: "Add to Cart" })] }), _jsx(DescriptionContainer, { children: parsedDescription })] })] }));
};
export default ProductDetails;
