import styled from 'styled-components';
import { InputContainer } from '../../routes/Product-details/product-details.styles';
export const SummaryItemContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
`;
export const ImageContainer = styled.div `
    width: 30%;

    img {
        height: 250px;
        width: 250px;
        object-fit: cover;
    }
`;
export const ProductNameContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
`;
export const ItemPriceContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin-right: 20px;

    span {
        font-size: 25px;
    }
`;
export const SummaryInputContainer = styled(InputContainer) `
    width: 10%;
`;
