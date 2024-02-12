import styled from 'styled-components';
export const CartItemContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
`;
export const ImageContainer = styled.div `

    img {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }
`;
export const TitleContainer = styled.div `
    display: flex: 
    flex-direction: column;
`;
