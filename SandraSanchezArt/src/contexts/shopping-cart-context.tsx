import React, { createContext, useState, useEffect, ReactNode, FC } from "react";

import { CategoryItem } from "../utilities/firebase-utilities";

export type Product = CategoryItem & {quantity: number, selectedSize: string, key: string};

const addProductAndQuantity = (cartItems: Product[], productToAdd: CategoryItem, selectedOption: string, price: number, amount: number, key: string) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption);

    if(itemExistsInCart){

        return cartItems.map((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption ? {...cartItem, quantity: cartItem.quantity + amount} : cartItem);
        
        // return cartItems.map((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption ? {...cartItem, quantity: cartItem.quantity + amount} : cartItem)
    }

    return [...cartItems, {...productToAdd, quantity: amount, selectedSize: selectedOption, itemPrice: price, key: key }];
};

const addOneCartItem = (cartItems: Product[], productToAdd: CategoryItem, selectedOption: string) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption);

    if(itemExistsInCart && itemExistsInCart.selectedSize === selectedOption){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id && cartItem.selectedSize === selectedOption ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeOneCartItem = (cartItems: Product[], productToRemove: CategoryItem, key: string) => {
    const itemExistsInCart = cartItems.find((cartItem) => cartItem.key === productToRemove.key);

    if(itemExistsInCart && itemExistsInCart.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.key !== key);
    }

    return cartItems.map((cartItem) => cartItem.key === key ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
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
    addProductAndQuantityToCart: (productToAdd: CategoryItem, selectedOption: string, amount: number, key: string) => void;
    addOneItemToCart: (productToAdd: CategoryItem, selectedOption: string) => void;
    removeOneItemFromCart: (productToRemove: CategoryItem, key: string) => void;
    clearItemFromCart: (productToClear: CategoryItem) => void;
    cartTotal: number;
    cartCount: number;
};

export const ShoppingCartContext = createContext<CartContextProps>({
    cartItems: [],
    setCartItems: () => {},
    addProductAndQuantityToCart: () => {},
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

    const addProductAndQuantityToCart = (productToAdd: CategoryItem, selectedOption: string, price: number, amount: number, key: string) => setCartItems(addProductAndQuantity(cartItems, productToAdd, selectedOption, price, amount, key));
    const addOneItemToCart = (productToAdd: CategoryItem, selectedOption: string) => setCartItems(addOneCartItem(cartItems, productToAdd, selectedOption));
    const removeOneItemFromCart = (productToRemove: CategoryItem, key: string) => setCartItems(removeOneCartItem(cartItems, productToRemove, key));
    const clearItemFromCart = (productToClear: CategoryItem) => setCartItems(clearCartItem(cartItems, productToClear));

    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.price * cartItem.quantity), 0)
    // },[cartItems]);
    
    
    const value = {cartItems, setCartItems, isCartOpen, setIsCartOpen, cartTotal ,setCartTotal, cartCount, setCartCount, addProductAndQuantityToCart, addOneItemToCart, removeOneItemFromCart, clearItemFromCart};
    return <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
}