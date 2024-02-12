import styled from 'styled-components';

import Button from '../Button/button-component';

export const PaymentButton = styled(Button)`
    font-size: 20px;
    border-radius: 2.5px;
`

export const PaymentFormContainer = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    flex-direction: column;
    margin: 20px 0;
    border: 2px solid black;

    button {
        width: 50%;
        margin-left: auto;
        margin-top: 50px;
    }
`