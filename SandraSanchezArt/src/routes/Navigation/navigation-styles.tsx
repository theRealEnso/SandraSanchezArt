import styled, {keyframes, css} from 'styled-components';
import { Link } from 'react-router-dom';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ConfettiExplosion from 'react-confetti-explosion';

const hoverColor = `rgb(255, 51, 119)`;

type DropdownProps = {
    open: boolean;
};

type SuccessMessageProps = {
    $show: boolean | number;
};

type BounceProps = {
    $bounce: boolean | number;
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`
const bounceAnimation = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
`

export const HeartsLogoContainer = styled(Link)`
    display: flex;
`

export const HeartsLogo = styled.img`
    height: 100px;
    width: 100px;
    margin: 10px 20px;
    cursor: pointer;
    color: pink;
`

export const NavigationContainer = styled.div`
    display: flex;
    // margin-bottom: 30px;

    h1 {
        position: relative;
        bottom: 10px;
        right: 20px;
        margin: 40px;
        font-family: "Dancing Script", cursive;
        font-weight: 700;
        font-size: 50px;
    }
`

export const NavbarContainer = styled.nav`
    display: flex;
    margin-left: auto;
`

export const NavList = styled.ul`
    list-style-type: none;
    margin: 0 10px;
    position: relative;
    left: 20px;
`

export const NavItem = styled.li`
    float: left;
`

export const NavLink = styled(Link)`
    display: flex;
    cursor: pointer;
    padding: 0 20px;
    margin: 50px 0;
    font-size: 20px;
    color: black;
    text-decoration: none;
    text-align: center;
    transition: color 0.5s ease;

    &:hover {
        color: ${hoverColor}
    }
`
export const Dropdown = styled.div<DropdownProps>`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 140px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1000;
    margin: 50px 0;

    ${(props) => props.open && 'display: block;'};
`

export const DropdownToggle = styled.div`
    cursor: pointer;
    display: inline-block;
    position: relative;
    top: 50px;
    color: black;
    text-align: center;
    // padding: 0px 16px;
    margin: 0 20px;
    text-decoration: none;
    font-size: 20px;
    transition: 0.5s ease;

    &:hover {
        color: ${hoverColor};

        ${Dropdown} {
            display: inline-block;
        }

    }
`;

export const DropdownLink = styled(Link)`
  color: black;
  padding: 12px 20px;
  display: block;
  text-decoration: none;

  &:hover {
    color: ${hoverColor};
    background-color: #ddd;
  }
`;

export const ShoppingCartContainer = styled.div<BounceProps>`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0px 40px 15px; 0;
    cursor: pointer;
    animation: ${({$bounce}) => $bounce ? css`animation: ${bounceAnimation} 1s ease-in-out` : 'none'}
`

export const ShoppingCart = styled(ShoppingBagOutlinedIcon)`
    // margin-right: 20px;
`
export const CartQuantityDisplay = styled.span`
    position: absolute; // removed from normal doc flow, position relative to nearest ancestor, which is the ShoppingCartContainer
    top: 58px;
    right: 11px;
    color: rgb(255, 26, 198);
    padding: 0 3px;
    border-radius: 40%;
    font-size: 14px;
    font-weight: bold;
`
export const SuccessMessageContainer = styled.div<SuccessMessageProps>`
    position: absolute;
    top: 120px;
    width: 100%;
    height: 30px;
    background: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: ${({ $show }) => ($show ? 1 : 0)};
    ${({ $show }) => ($show
        ? css`animation: ${fadeIn} 0.6s ease-in-out;`
        : css`animation: ${fadeOut} 0.6s ease-in-out; display: none;`)
    }


    h4 {
        color: #fff;
    };

`

export const Confetti = styled(ConfettiExplosion)`
    position: absolute;
    width: 100;
`
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// const hoverColor = `rgb(255, 51, 119)`;

// export const NavigationContainer = styled.div`
//     display: flex;
// `
// export const HeartsLogoContainer = styled(Link)`
//     display: flex;
// `

// export const HeartsLogo = styled.img`
//     height: 100px;
//     width: 100px;
//     margin: 10px 20px;
//     cursor: pointer;
//     color: pink;
// `

// export const NavLinksContainer = styled.div`
//     display: flex;
//     margin-left: auto;
//     padding: 0 50px;
//     align-items: center;
//     justify-content: flex-end;
// `

// export const NavLink = styled(Link)`
//     display: flex;
//     justify-content: flex-end;
//     cursor: pointer;
//     padding: 0 20px;
//     margin: 50px 0;
//     font-size: 20px;
//     color: black;
//     text-decoration: none;
//     transition: color 0.5s ease;

//     &:hover {
//         color: ${hoverColor}
//     }
// `
// export const ShoppingCartContainer = styled.div`
//     position: relative;
//     display: flex;
//     align-items: center;
//     margin-right: 50px;
// `

// export const ShoppingCart = styled(ShoppingBagOutlinedIcon)`
//     // margin-right: 20px;
// `
// export const CartQuantityDisplay = styled.span`
//     position: absolute; // removed from normal doc flow, position relative to nearest ancestor, which is the ShoppingCartContainer
//     top: 58px;
//     right: 11px;
//     color: rgb(255, 26, 198);
//     padding: 0 3px;
//     border-radius: 40%;
//     font-size: 14px;
//     font-weight: bold;
// `

