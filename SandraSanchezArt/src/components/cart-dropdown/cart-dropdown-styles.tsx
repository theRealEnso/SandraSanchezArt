import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
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
`
export const SubTotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`