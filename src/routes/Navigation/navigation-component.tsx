import { Fragment, FC, MouseEvent, useContext, useState, useEffect, useRef} from "react";

import { useNavigate } from "react-router-dom";

import { NavigationContainer, NavbarContainer, NavigationButton, DropdownMenu, DropdownLink, DropdownToggle, HeartsLogoContainer, HeartsLogo, ShoppingCartContainer, ShoppingCart, CartQuantityDisplay, SuccessMessageContainer, Confetti} from "./navigation-styles";
import heartsLogo from '../../assets/images/hearts.jpg'; // attribute to <a href="https://www.freepik.com/free-vector/hand-drawn-overlapping-hearts-black-colour_94357366.htm#query=heart&position=49&from_view=search&track=sph&uuid=31435bda-b504-4a85-a5ce-60fd6359f940">Image by juicy_fish</a> on Freepik

import { Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/user-context";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context";

import { signOutAuthUser } from "../../utilities/firebase-utilities";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";

const Navigation: FC = () => {
    //use useRef to create a reference to the DOM node of the cart dropdown component
    const cartDropdownRef = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate();

    const {currentUser} = useContext(UserContext);
    const {cartCount, cartItemIsAdded} = useContext(ShoppingCartContext);

    const [isMentoringDropdownOpen, setIsMentoringDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

    const navigateToSignInPage = () => navigate(`/authentication`);

    const onMentoringMouseEnter = () => {
        setIsMentoringDropdownOpen(true);
        setIsShopDropdownOpen(false);
    };

    const onMentoringMouseLeave = () => setIsMentoringDropdownOpen(false);

    const toggleMentoringDropdown = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setIsMentoringDropdownOpen(!isMentoringDropdownOpen);
        setIsShopDropdownOpen(false);
    };

    const onShopMouseEnter = () => {
        setIsShopDropdownOpen(true);
        setIsMentoringDropdownOpen(false);
    }
    
    const onShopMouseLeave = () => setIsShopDropdownOpen(false);
    const toggleShopDropdown = (event: MouseEvent<HTMLElement>) => {
        // console.log(event);
        event.stopPropagation();
        setIsShopDropdownOpen(!isShopDropdownOpen);
        setIsMentoringDropdownOpen(false);
    };

    const closeMentoringAndShopDropdowns = () => {
        setIsMentoringDropdownOpen(false);
        setIsShopDropdownOpen(false);
    };

    const toggleCartDropdown = (event: MouseEvent<HTMLElement>) => {
        // console.log(event);
        event.stopPropagation();
        setIsCartDropdownOpen(!isCartDropdownOpen);
        setIsShopDropdownOpen(false);
    };

    const closeCartDropdown = () => setIsCartDropdownOpen(false);

    useEffect(() => {
        const closeMentoringDropdown = (event: MouseEvent<HTMLElement>) => {
            const target = event.target as HTMLElement;
            if(target.id !== 'mentoring'){
                setIsMentoringDropdownOpen(false);
            }    
        };

        document.body.addEventListener("click", closeMentoringDropdown);

        return () => document.body.removeEventListener("click", closeMentoringDropdown)
    }, []);

    useEffect(() => {
        const closeShopDropdown = (event: MouseEvent<HTMLElement>) => {
            const target = event.target as HTMLElement;
            if(target.id !== "shop"){
                setIsShopDropdownOpen(false);
            }   
        }

        document.body.addEventListener("click", closeShopDropdown);

        return () => document.body.removeEventListener("click", closeShopDropdown);
    },[]);

    useEffect(() => {
        const handleOutsideCartDropdownClick = (event: MouseEvent<HTMLElement>) => {
            //checks if CartDropdown exists i.e if the component is mounted, and if the thing that was clicked was not contained inside the dropdown (i.e. was clicked outside of the cart dropdown). If so, this means what was clicked was outside of the CartDropdown, so setCartDropdownIsOpen to false to close it
            //.current is used to access /point to the value of a `ref`
            if(cartDropdownRef.current && !cartDropdownRef.current.contains(event.target as HTMLElement)){
                setIsCartDropdownOpen(false);
            }
        };

        document.body.addEventListener("click", handleOutsideCartDropdownClick);

        return () => document.body.removeEventListener("click", handleOutsideCartDropdownClick);
    },[isCartDropdownOpen]);


    return (
        <Fragment>

            <NavigationContainer>
                <HeartsLogoContainer to='/'>
                    <HeartsLogo src={heartsLogo}></HeartsLogo>
                </HeartsLogoContainer>

                <h1>Sandra Sanchez</h1>

                <NavbarContainer>
                    <NavigationButton onMouseEnter={closeMentoringAndShopDropdowns}>About</NavigationButton>

                    <DropdownToggle id="mentoring" data-toggle>
                        <NavigationButton data-dropdown-button onClick={toggleMentoringDropdown} onMouseEnter={onMentoringMouseEnter}>Mentoring</NavigationButton>
                        <DropdownMenu open={isMentoringDropdownOpen} onMouseLeave={onMentoringMouseLeave}>
                            <DropdownLink to="">Private Lessons</DropdownLink>
                            <DropdownLink to="">Group Classes</DropdownLink>
                        </DropdownMenu>
                    </DropdownToggle>
                    
                    <DropdownToggle id="shop" data-toggle>
                        <NavigationButton data-dropdown-button onClick={toggleShopDropdown} onMouseEnter={onShopMouseEnter}>Shop</NavigationButton>
                        <DropdownMenu open={isShopDropdownOpen} onMouseLeave={onShopMouseLeave}>
                            <DropdownLink to="shop/inks">Inks</DropdownLink>
                            <DropdownLink to="shop/illustrations">Illustrations</DropdownLink>
                            <DropdownLink to="shop/fine art">Fine Art</DropdownLink>
                        </DropdownMenu>
                    </DropdownToggle>

            
                    {currentUser ? <NavigationButton onClick={signOutAuthUser} onMouseEnter={closeMentoringAndShopDropdowns}>Sign Out</NavigationButton> : <NavigationButton onMouseEnter={closeMentoringAndShopDropdowns} onClick={navigateToSignInPage}>Sign In</NavigationButton> }

                    <ShoppingCartContainer onClick={toggleCartDropdown} onMouseEnter={closeMentoringAndShopDropdowns} $bounce={+cartItemIsAdded}>
                        {cartItemIsAdded && <Confetti particleSize={6} particleCount={100}></Confetti>}
                        <ShoppingCart fontSize='large'></ShoppingCart>
                        <CartQuantityDisplay>{cartCount}</CartQuantityDisplay>
                    </ShoppingCartContainer>

                </NavbarContainer>

                {/* //attach cartDropdownRef to the cart dropdown component. This allows access to the underlying DOM node of the cart dropdown component */}
                {isCartDropdownOpen && (<CartDropdown ref={cartDropdownRef} close={closeCartDropdown}></CartDropdown>)}
        
                {cartItemIsAdded && 
                    <SuccessMessageContainer $show={+cartItemIsAdded}>
                        <h4>Item successfully added to cart!</h4>
                    </SuccessMessageContainer> 
                }

            </NavigationContainer>

            <Outlet></Outlet>
        </Fragment>

    );
};

export default Navigation;