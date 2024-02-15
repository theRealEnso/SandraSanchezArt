import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import {Elements} from '@stripe/react-stripe-js'
import { stripePromise, options } from './utilities/stripe/stripe.utilities';

import App from './App';
// import 'dotenv/config';

import { UserProvider } from './contexts/user-context';
import { CategoriesProvider } from './contexts/categories-context';
import { ShoppingCartProvider } from './contexts/shopping-cart-context';

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
          <UserProvider>
            <ShoppingCartProvider>
              <Elements stripe={stripePromise} options={options}>
                <App />
              </Elements>
            </ShoppingCartProvider>
          </UserProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
