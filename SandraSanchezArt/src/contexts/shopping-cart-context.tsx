import React, { createContext, useState, useEffect, ReactNode, FC } from "react";

import { CategoryItem } from "../utilities/firebase-utilities";

type Product = CategoryItem & {quantity: number};

const addProduct = (cartItems: Product[], productToAdd: CategoryItem, selectedOption: string, amount: number) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(itemExistsInCart){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + amount} : cartItem)
    }

    return [...cartItems, {...productToAdd, quantity: amount, selectedSize: selectedOption}]
};

const addOneCartItem = (cartItems: Product[], productToAdd: CategoryItem) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(itemExistsInCart){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeOneCartItem = (cartItems: Product[], productToRemove: CategoryItem) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if(itemExistsInCart && itemExistsInCart.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
};

const clearCartItem = (cartItems: Product[], productToClear: CategoryItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
}; 

type CartProviderProps = {
    children?: ReactNode;
};

type CartContextProps = {
    cartItems: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    addProductToCart: (productToAdd: CategoryItem, selectedOption: string, amount: number) => void;
    addOneItemToCart: (productToAdd: CategoryItem) => void;
    removeOneItemFromCart: (productToRemove: CategoryItem) => void;
    clearItemFromCart: (productToClear: CategoryItem) => void;
    cartTotal: number;
    cartCount: number;

};

export const ShoppingCartContext = createContext<CartContextProps>({
    cartItems: [],
    setCartItems: () => {},
    addProductToCart: () => {},
    addOneItemToCart: () => {},
    removeOneItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    cartCount: 0,
});

export const ShoppingCartProvider: FC<CartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const addProductToCart = (productToAdd: CategoryItem, selectedOption: string, amount: number) => setCartItems(addProduct(cartItems, productToAdd, selectedOption, amount));
    const addOneItemToCart = (productToAdd: CategoryItem) => setCartItems(addOneCartItem(cartItems, productToAdd));
    const removeOneItemFromCart = (productToRemove: CategoryItem) => setCartItems(removeOneCartItem(cartItems, productToRemove));
    const clearItemFromCart = (productToClear: CategoryItem) => setCartItems(clearCartItem(cartItems, productToClear));

    // const newCartTotal = cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.price * cartItem.quantity ), 0);
    

    // setCartTotal(newCartTotal);

    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    
    
    const value = {cartItems, setCartItems, isCartOpen, setIsCartOpen, cartTotal ,setCartTotal, cartCount, setCartCount, addProductToCart, addOneItemToCart, removeOneItemFromCart, clearItemFromCart};
    return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
}