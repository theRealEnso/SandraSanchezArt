import { Fragment, useContext } from "react";
import { NavigationContainer, HeartsLogoContainer, HeartsLogo, NavLinksContainer, NavLink, ShoppingCartContainer, ShoppingCart, CartQuantityDisplay } from "./navigation-styles";
import heartsLogo from '../../assets/images/hearts.jpg'; // attribute to <a href="https://www.freepik.com/free-vector/hand-drawn-overlapping-hearts-black-colour_94357366.htm#query=heart&position=49&from_view=search&track=sph&uuid=31435bda-b504-4a85-a5ce-60fd6359f940">Image by juicy_fish</a> on Freepik

import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";

import { signOutAuthUser } from "../../utilities/firebase-utilities";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);

    return (
        <Fragment>

            <NavigationContainer>
                <HeartsLogoContainer to='/'>
                    <HeartsLogo src={heartsLogo}></HeartsLogo>
                </HeartsLogoContainer>
                
                <NavLinksContainer>
                    <NavLink to='/about'>About Me</NavLink>
                    <NavLink to='/mentoring'>Mentoring</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    {currentUser ? (<NavLink to='/' onClick={signOutAuthUser}>Sign Out</NavLink>) : <NavLink to='/authentication'>Sign In</NavLink>}
                </NavLinksContainer>

                <ShoppingCartContainer>
                    <ShoppingCart fontSize='large'></ShoppingCart>
                    <CartQuantityDisplay>0</CartQuantityDisplay>
                </ShoppingCartContainer>


            </NavigationContainer>

            <Outlet></Outlet>
        </Fragment>

    );
};

export default Navigation;