import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 350px;
    position: absolute;
    top: 80px;
    right: 40px;
    border: 1px solid black;
    background-color: white;
    z-index: 5
`

export const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    font-family: "Architects Daughter", cursive;
    font-weight: bold;
`
export const SubTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;

    button {
        position: relative;
        bottom: 20px;
        border-radius: 5px;
        font-size: 18px;
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
    }

    h3 {
        font-family: "Architects Daughter", cursive;
        font-weight: bold;
    }
`