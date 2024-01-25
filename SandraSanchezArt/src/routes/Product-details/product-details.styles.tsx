import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: auto;
    
`

export const ImageContainer = styled.div`
    width: 50%;
    overflow: hidden;

    img {
        width: 400px;
        height: 500px;
    }
`
export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%
`

export const SelectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const QuantityContainer = styled.div`
    display: flex;
`
export const QuantityInput = styled.input`
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
`