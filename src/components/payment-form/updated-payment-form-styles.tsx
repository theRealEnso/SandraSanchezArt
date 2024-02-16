import styled from 'styled-components';

import Button from '../Button/button-component';

export const PaymentButton = styled(Button)`
    font-size: 25px;
    border-radius: 2.5px;
`

export const PaymentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 50%;
    height: 100%;
    margin: 20px 20px;

    button {
        width: 50%;
        margin-left: auto;
        margin-top: 50px;
    }
`

export const FormContainer = styled.form`

    label {
        font-size: 30px;
        margin-bottom: 30px;
    }
`

export const AddressElementContainer = styled.div`
    margin-bottom: 40px;
    margin-top: 20px;
`

export const PaymentElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    button {
        margin-left: auto;
    }
`