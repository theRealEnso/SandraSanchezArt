import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utilities/stripe/stripe.utilities';
import App from './App';
// import 'dotenv/config';
import { UserProvider } from './contexts/user-context';
import { CategoriesProvider } from './contexts/categories-context';
import { ShoppingCartProvider } from './contexts/shopping-cart-context';
// import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(CategoriesProvider, { children: _jsx(UserProvider, { children: _jsx(ShoppingCartProvider, { children: _jsx(Elements, { stripe: stripePromise, children: _jsx(App, {}) }) }) }) }) }) }));
