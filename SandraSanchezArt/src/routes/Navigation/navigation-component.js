import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationContainer, NavbarContainer, NavigationButton, DropdownMenu, DropdownLink, DropdownToggle, HeartsLogoContainer, HeartsLogo, ShoppingCartContainer, ShoppingCart, CartQuantityDisplay, SuccessMessageContainer, Confetti } from "./navigation-styles";
import heartsLogo from '../../assets/images/hearts.jpg'; // attribute to <a href="https://www.freepik.com/free-vector/hand-drawn-overlapping-hearts-black-colour_94357366.htm#query=heart&position=49&from_view=search&track=sph&uuid=31435bda-b504-4a85-a5ce-60fd6359f940">Image by juicy_fish</a> on Freepik
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";
import { signOutAuthUser } from "../../utilities/firebase-utilities";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
const Navigation = () => {
    //use useRef to create a reference to the DOM node of the cart dropdown component
    const cartDropdownRef = useRef(null);
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { cartCount, cartItemIsAdded } = useContext(ShoppingCartContext);
    const [isMentoringDropdownOpen, setIsMentoringDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    const navigateToSignInPage = () => navigate(`/authentication`);
    const onMentoringMouseEnter = () => {
        setIsMentoringDropdownOpen(true);
        setIsShopDropdownOpen(false);
    };
    const onMentoringMouseLeave = () => setIsMentoringDropdownOpen(false);
    const toggleMentoringDropdown = (event) => {
        event.stopPropagation();
        setIsMentoringDropdownOpen(!isMentoringDropdownOpen);
        setIsShopDropdownOpen(false);
    };
    const onShopMouseEnter = () => {
        setIsShopDropdownOpen(true);
        setIsMentoringDropdownOpen(false);
    };
    const onShopMouseLeave = () => setIsShopDropdownOpen(false);
    const toggleShopDropdown = (event) => {
        // console.log(event);
        event.stopPropagation();
        setIsShopDropdownOpen(!isShopDropdownOpen);
        setIsMentoringDropdownOpen(false);
    };
    const closeMentoringAndShopDropdowns = () => {
        setIsMentoringDropdownOpen(false);
        setIsShopDropdownOpen(false);
    };
    const toggleCartDropdown = (event) => {
        // console.log(event);
        event.stopPropagation();
        setIsCartDropdownOpen(!isCartDropdownOpen);
        setIsShopDropdownOpen(false);
    };
    useEffect(() => {
        const closeMentoringDropdown = (event) => {
            const target = event.target;
            if (target.id !== 'mentoring') {
                setIsMentoringDropdownOpen(false);
            }
        };
        document.body.addEventListener("click", closeMentoringDropdown);
        return () => document.body.removeEventListener("click", closeMentoringDropdown);
    }, []);
    useEffect(() => {
        const closeShopDropdown = (event) => {
            const target = event.target;
            if (target.id !== "shop") {
                setIsShopDropdownOpen(false);
            }
        };
        document.body.addEventListener("click", closeShopDropdown);
        return () => document.body.removeEventListener("click", closeShopDropdown);
    }, []);
    useEffect(() => {
        const handleOutsideCartDropdownClick = (event) => {
            //checks if CartDropdown exists i.e if the component is mounted, and if the thing that was clicked was not contained inside the dropdown (i.e. was clicked outside of the cart dropdown). If so, this means what was clicked was outside of the CartDropdown, so setCartDropdownIsOpen to false to close it
            //.current is used to access /point to the value of a `ref`
            if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
                setIsCartDropdownOpen(false);
            }
        };
        document.body.addEventListener("click", handleOutsideCartDropdownClick);
        return () => document.body.removeEventListener("click", handleOutsideCartDropdownClick);
    }, [isCartDropdownOpen]);
    return (_jsxs(Fragment, { children: [_jsxs(NavigationContainer, { children: [_jsx(HeartsLogoContainer, { to: '/', children: _jsx(HeartsLogo, { src: heartsLogo }) }), _jsx("h1", { children: "Sandra Sanchez" }), _jsxs(NavbarContainer, { children: [_jsx(NavigationButton, { onMouseEnter: closeMentoringAndShopDropdowns, children: "About" }), _jsxs(DropdownToggle, { id: "mentoring", "data-toggle": true, children: [_jsx(NavigationButton, { "data-dropdown-button": true, onClick: toggleMentoringDropdown, onMouseEnter: onMentoringMouseEnter, children: "Mentoring" }), _jsxs(DropdownMenu, { open: isMentoringDropdownOpen, onMouseLeave: onMentoringMouseLeave, children: [_jsx(DropdownLink, { to: "", children: "Private Lessons" }), _jsx(DropdownLink, { to: "", children: "Group Classes" })] })] }), _jsxs(DropdownToggle, { id: "shop", "data-toggle": true, children: [_jsx(NavigationButton, { "data-dropdown-button": true, onClick: toggleShopDropdown, onMouseEnter: onShopMouseEnter, children: "Shop" }), _jsxs(DropdownMenu, { open: isShopDropdownOpen, onMouseLeave: onShopMouseLeave, children: [_jsx(DropdownLink, { to: "shop/inks", children: "Inks" }), _jsx(DropdownLink, { to: "shop/illustrations", children: "Illustrations" }), _jsx(DropdownLink, { to: "shop/fine art", children: "Fine Art" })] })] }), currentUser ? _jsx(NavigationButton, { onClick: signOutAuthUser, onMouseEnter: closeMentoringAndShopDropdowns, children: "Sign Out" }) : _jsx(NavigationButton, { onMouseEnter: closeMentoringAndShopDropdowns, onClick: navigateToSignInPage, children: "Sign In" }), _jsxs(ShoppingCartContainer, { onClick: toggleCartDropdown, onMouseEnter: closeMentoringAndShopDropdowns, "$bounce": +cartItemIsAdded, children: [cartItemIsAdded && _jsx(Confetti, { particleSize: 6, particleCount: 100 }), _jsx(ShoppingCart, { fontSize: 'large' }), _jsx(CartQuantityDisplay, { children: cartCount })] })] }), isCartDropdownOpen && (_jsx(CartDropdown, { ref: cartDropdownRef })), cartItemIsAdded &&
                        _jsx(SuccessMessageContainer, { "$show": +cartItemIsAdded, children: _jsx("h4", { children: "Item successfully added to cart!" }) })] }), _jsx(Outlet, {})] }));
};
export default Navigation;
