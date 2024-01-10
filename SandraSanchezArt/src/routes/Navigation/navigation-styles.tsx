import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const hoverColor = `rgb(255, 51, 119)`;

export const NavigationContainer = styled.div`
    display: flex;
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

export const NavLinksContainer = styled.div`
    display: flex;
    margin-left: auto;
    padding: 0 50px;
    align-items: center;
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    padding: 0 20px;
    margin: 50px 0;
    font-size: 20px;
    color: black;
    text-decoration: none;
    transition: color 0.5s ease;

    &:hover {
        color: ${hoverColor}
    }
`
export const ShoppingCartContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 50px;
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

