import styled from 'styled-components'

export const CheckoutSummaryItemContainer = styled.div`
    display: flex;
    margin: 30px 30px;
    align-items: center;
    justify-content: center;

`

export const ImageContainer = styled.div`
    position: relative;
    width: 40%;

    img {
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
`

export const QuantityDisplay = styled.div`
    position: absolute;
    top: -20px;
    right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(38, 38, 38, .7);
    color: #fff;
    font-weight: bold;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`

export const PriceContainer = styled.div`
    display: flex;
    width: 10%;
    margin: 0 10px;
`