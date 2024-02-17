import styled from 'styled-components';

import DeleteForever from '@mui/icons-material/DeleteForever';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid black;
`

export const ImageContainer = styled.div`
    width: 30%;

    img {
        width: 100px;
        height: 150px;
        object-fit: cover;
    }
`

export const TitleContainer = styled.div`
    display: flex: 
    flex-direction: column;
    width: 40%;
    margin: 0 10px;
`
export const IconContainer = styled.div`
    margin: 0 10px;
`

export const RemoveIcon = styled(DeleteForever)`
    cursor: pointer;
    
    &:hover {
        color: red;
    }
`