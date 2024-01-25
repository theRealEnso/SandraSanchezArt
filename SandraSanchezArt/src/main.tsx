import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// import 'dotenv/config';

import { UserProvider } from './contexts/user-context';
import { CategoriesProvider } from './contexts/categories-context';
import { CartProvider } from './contexts/shopping-cart-context';

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
