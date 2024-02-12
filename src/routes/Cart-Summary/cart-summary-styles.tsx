import styled from 'styled-components';

import Button from "../../components/Button/button-component";

export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: auto;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;

    span {
        margin-left: auto;
        font-size: 30px;
    }
 `

export const CheckoutContainer = styled.div`
   display: flex;
   flex-direction: column;
`

export const ShoppingCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    border: 1px solid black;
`

export const ButtonContainer = styled.div`
    display: flex;
    margin-left: auto;
`

export const CheckoutButton = styled(Button)`
    border-radius: 2px;
    font-size: 26px;
`

export const ReturnHomeButton = styled(Button)`
    border-radius: 2px;
    font-size: 26px;
`