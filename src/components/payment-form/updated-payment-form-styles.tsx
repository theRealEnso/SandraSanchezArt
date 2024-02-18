import styled from 'styled-components';

import Button from '../Button/button-component';

import CheckoutFormInput from '../Checkout-form-input/checkout-form-input-component';

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

export const EmailContainer = styled.div`
    width: 100%;

    label {
        margin-bottom: 10px;
    }
    input {
        margin-top: 10px;
    }
`

export const UpdatedCheckoutInput = styled(CheckoutFormInput)`
    margin-bottom: 40px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #DDDDDD;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
    transition: box-shadow 150ms ease-in-out;

    &:focus {
        box-shadow: 0px 0px 10px rgb(34, 140, 250, 1);
        border: 1px solid rgb(34, 140, 250, 1);
    }
`