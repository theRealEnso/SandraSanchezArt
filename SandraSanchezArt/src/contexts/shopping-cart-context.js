import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
const addProductAndQuantity = (cartItems, productToAdd, selectedOption, price, amount, key) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption);
    if (itemExistsInCart) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption ? { ...cartItem, quantity: cartItem.quantity + amount } : cartItem);
        // return cartItems.map((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption ? {...cartItem, quantity: cartItem.quantity + amount} : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: amount, selectedSize: selectedOption, itemPrice: price, key: key }];
};
const addOneCartItem = (cartItems, productToAdd, selectedOption, key) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption && cartItem.key === key);
    if (itemExistsInCart) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeOneCartItem = (cartItems, productToRemove, selectedOption, key) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToRemove.id && cartItem.selectedSize === selectedOption && cartItem.key === productToRemove.key);
    if (itemExistsInCart && itemExistsInCart.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.key !== key);
    }
    return cartItems.map((cartItem) => cartItem.key === key ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};
const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};
export const ShoppingCartContext = createContext({
    cartItems: [],
    setCartItems: () => { },
    addProductAndQuantityToCart: () => { },
    addOneItemToCart: () => { },
    removeOneItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartTotal: 0,
    cartCount: 0,
    cartItemIsAdded: false,
    setCartItemIsAdded: () => { },
    isCartOpen: false,
    setIsCartOpen: () => { },
});
export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [cartItemIsAdded, setCartItemIsAdded] = useState(false);
    const addProductAndQuantityToCart = (productToAdd, selectedOption, price, amount, key) => setCartItems(addProductAndQuantity(cartItems, productToAdd, selectedOption, price, amount, key));
    const addOneItemToCart = (productToAdd, selectedOption, key) => setCartItems(addOneCartItem(cartItems, productToAdd, selectedOption, key));
    const removeOneItemFromCart = (productToRemove, selectedOption, key) => setCartItems(removeOneCartItem(cartItems, productToRemove, selectedOption, key));
    const clearItemFromCart = (productToClear) => setCartItems(clearCartItem(cartItems, productToClear));
    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);
    useEffect(() => {
        const newCartTotal = cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.itemPrice * cartItem.quantity), 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);
    const value = { cartItems, setCartItems, isCartOpen, setIsCartOpen, cartTotal, setCartTotal, cartCount, setCartCount, addProductAndQuantityToCart, addOneItemToCart, removeOneItemFromCart, clearItemFromCart, cartItemIsAdded, setCartItemIsAdded };
    return _jsx(ShoppingCartContext.Provider, { value: value, children: children });
};
