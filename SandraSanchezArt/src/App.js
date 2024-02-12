import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { useEffect, useContext } from 'react';
import { CategoriesContext } from './contexts/categories-context';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation-component';
import Home from './routes/Home/home-component';
import AboutMe from './routes/About-me/about-me-component';
import Mentoring from './routes/Mentoring/mentoring-component';
import Contact from './routes/Contact/contact-component';
import Authentication from './routes/Authentication/authentication-component';
import Category from './components/category/category-component';
import ProductDetails from './routes/Product-details/product-details-component';
import CartSummary from './routes/Cart-Summary/cart-summary-component';
import Checkout from './routes/Checkout/checkout-component';
import { getCategoriesAndDocuments } from './utilities/firebase-utilities';
// import ART_DATA from './SandraSanchez-art-data';
// import { addCollectionAndDocuments } from './utilities/firebase-utilities';
const App = () => {
    const { setCategoriesMap } = useContext(CategoriesContext);
    useEffect(() => {
        const getData = async () => {
            try {
                const categoriesMap = await getCategoriesAndDocuments();
                console.log(`Logging categories map from App component!: `, categoriesMap);
                setCategoriesMap(categoriesMap);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [setCategoriesMap]);
    //for adding data to firestore
    // useEffect(() => {
    //   addCollectionAndDocuments('categories', ART_DATA);
    // }, []);
    return (_jsx(Routes, { children: _jsxs(Route, { path: '/', element: _jsx(Navigation, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: 'about', element: _jsx(AboutMe, {}) }), _jsx(Route, { path: 'mentoring', element: _jsx(Mentoring, {}) }), _jsx(Route, { path: 'contact', element: _jsx(Contact, {}) }), _jsx(Route, { path: 'shop/:category', element: _jsx(Category, {}) }), _jsx(Route, { path: 'shop/:category/:id', element: _jsx(ProductDetails, {}) }), _jsx(Route, { path: 'authentication', element: _jsx(Authentication, {}) }), _jsx(Route, { path: 'cart-summary', element: _jsx(CartSummary, {}) }), _jsx(Route, { path: 'checkout', element: _jsx(Checkout, {}) })] }) }));
};
export default App;
