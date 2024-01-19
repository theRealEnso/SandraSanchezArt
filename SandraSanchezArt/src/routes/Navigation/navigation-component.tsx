import { Fragment, FC, MouseEvent, useContext, useState, useEffect} from "react";
import { NavigationContainer, NavbarContainer, NavList, NavItem, NavLink, Dropdown, DropdownLink, DropdownToggle, HeartsLogoContainer, HeartsLogo, ShoppingCartContainer, ShoppingCart, CartQuantityDisplay } from "./navigation-styles";
import heartsLogo from '../../assets/images/hearts.jpg'; // attribute to <a href="https://www.freepik.com/free-vector/hand-drawn-overlapping-hearts-black-colour_94357366.htm#query=heart&position=49&from_view=search&track=sph&uuid=31435bda-b504-4a85-a5ce-60fd6359f940">Image by juicy_fish</a> on Freepik

import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";

import { signOutAuthUser } from "../../utilities/firebase-utilities";

const Navigation: FC = () => {
    const {currentUser} = useContext(UserContext);
    const [isMentoringDropdownOpen, setIsMentoringDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

    const toggleMentoringDropDown = () => setIsMentoringDropdownOpen(!isMentoringDropdownOpen);
    const onMentoringMouseEnter = () => setIsMentoringDropdownOpen(true);
    const onMentoringMouseLeave = () => setIsMentoringDropdownOpen(false);

    const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen);
    const onShopMouseEnter = () => setIsShopDropdownOpen(true);
    const onShopMouseLeave = () => setIsShopDropdownOpen(false);


    useEffect(() => {
        const closeMentoringDropdown = (event) => {
            // console.log(event);
            if(event.target.id !== 'mentoring'){
                setIsMentoringDropdownOpen(false);
            }    
        };

        document.body.addEventListener("click", closeMentoringDropdown);

        return () => document.body.removeEventListener("click", closeMentoringDropdown)
    }, []);

    useEffect(() => {
        const closeShopDropdown = (event) => {
            // console.log(event);
            if(event.target.id !== "shop"){
                setIsShopDropdownOpen(false)
            }   
        }

        document.body.addEventListener("click", closeShopDropdown);

        return () => document.body.removeEventListener("click", closeShopDropdown);
    },[])

    return (
        <Fragment>

            <NavigationContainer>
                <HeartsLogoContainer to='/'>
                    <HeartsLogo src={heartsLogo}></HeartsLogo>
                </HeartsLogoContainer>

                <h1>Sandra Sanchez</h1>

                <NavbarContainer>
                    <NavList>
                        <NavItem><NavLink to='/about'>About</NavLink></NavItem>

                        <NavItem>
                            <DropdownToggle id="mentoring" onClick={toggleMentoringDropDown} onMouseEnter={onMentoringMouseEnter} onMouseLeave={onMentoringMouseLeave}>Mentoring</DropdownToggle>
                            <Dropdown open={isMentoringDropdownOpen} onMouseEnter={onMentoringMouseEnter} onMouseLeave={onMentoringMouseLeave}>
                                <DropdownLink to="">Private Lessons</DropdownLink>
                                <DropdownLink to="">Group Classes</DropdownLink>
                            </Dropdown>
                        </NavItem>

                        <NavItem>
                            <DropdownToggle id="shop" onClick={toggleShopDropdown} onMouseEnter={onShopMouseEnter} onMouseLeave={onShopMouseLeave}>Shop</DropdownToggle>
                            <Dropdown open={isShopDropdownOpen} onMouseEnter={onShopMouseEnter} onMouseLeave={onShopMouseLeave}>
                                <DropdownLink to="shop/inks">Inks</DropdownLink>
                                <DropdownLink to="shop/illustrations">Illustrations</DropdownLink>
                                <DropdownLink to="shop/fine-art">Fine Art</DropdownLink>
                            </Dropdown>
                        </NavItem>
                        {currentUser ? <NavItem><NavLink to='/' onClick={signOutAuthUser}>Sign Out</NavLink></NavItem> : <NavItem><NavLink to='/authentication'>Sign In</NavLink></NavItem> }
                    </NavList>

                    <ShoppingCartContainer>
                        <ShoppingCart fontSize='large'></ShoppingCart>
                        <CartQuantityDisplay>0</CartQuantityDisplay>
                    </ShoppingCartContainer>
                </NavbarContainer>

            </NavigationContainer>

            <Outlet></Outlet>
        </Fragment>

    );
};

export default Navigation;

// import { Fragment, useContext } from "react";
// import { NavigationContainer, HeartsLogoContainer, HeartsLogo, NavLinksContainer, NavLink, ShoppingCartContainer, ShoppingCart, CartQuantityDisplay } from "./navigation-styles";
// import heartsLogo from '../../assets/images/hearts.jpg'; // attribute to <a href="https://www.freepik.com/free-vector/hand-drawn-overlapping-hearts-black-colour_94357366.htm#query=heart&position=49&from_view=search&track=sph&uuid=31435bda-b504-4a85-a5ce-60fd6359f940">Image by juicy_fish</a> on Freepik

// import { Outlet } from "react-router-dom";
// import { UserContext } from "../../contexts/user-context";

// import { signOutAuthUser } from "../../utilities/firebase-utilities";

// const Navigation = () => {
//     const {currentUser} = useContext(UserContext);

//     return (
//         <Fragment>

//             <NavigationContainer>
//                 <HeartsLogoContainer to='/'>
//                     <HeartsLogo src={heartsLogo}></HeartsLogo>
//                 </HeartsLogoContainer>
                
//                 <NavLinksContainer>
//                     <NavLink to='/about'>About Me</NavLink>
//                     <NavLink to='/mentoring'>Mentoring</NavLink>
//                     <NavLink to='/contact'>Contact</NavLink>
//                     <NavLink to='/shop'>Shop</NavLink>
//                     {currentUser ? (<NavLink to='/' onClick={signOutAuthUser}>Sign Out</NavLink>) : <NavLink to='/authentication'>Sign In</NavLink>}
//                 </NavLinksContainer>

//                 <ShoppingCartContainer>
//                     <ShoppingCart fontSize='large'></ShoppingCart>
//                     <CartQuantityDisplay>0</CartQuantityDisplay>
//                 </ShoppingCartContainer>


//             </NavigationContainer>

//             <Outlet></Outlet>
//         </Fragment>

//     );
// };

// export default Navigation;