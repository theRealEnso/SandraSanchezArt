import styled, {css} from 'styled-components';

import CheckoutFormInput from '../../components/Checkout-form-input/checkout-form-input-component';

type IsOpenProps = {
    isOpen: boolean;
};

type OptionalAddressInputProps = {
    $isDisplayed: boolean;
};

export const CheckoutContainer = styled.div`
    width: 80%;
    margin: auto;
`

export const FormContainer = styled.div`
    width: 50%;

    input {
        height: 40px;
    }

`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label:first-child {
        font-size: 30px;
        margin-bottom: 10px;
    }

    input:focus {
        border: 1px solid red;
    }

    margin-bottom: 30px;
`

export const DeliveryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    button {
        border: 1px solid black;
    }

    #delivery-label {
        font-size: 30px;
        margin-bottom: 10px;
    }
`

export const CountriesDropdownContainer = styled.div`
    position: relative;

    label {
        position: absolute;
        font-size: 12px;
        text-transform: uppercase;
        top: 6px;
        left: 10px;
        color: rgb(102, 102, 102);
        cursor: pointer;
    }
`

export const CountriesDropdownButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: 1px solid rgb(128,128,128);
    border-radius: 2.5px;
    cursor: pointer;
    height: 45px;
    padding-top: 25px;
    text-align: left;
`

export const CountriesDropdownContent = styled.div<IsOpenProps>`
    position: absolute;
    width: 100%;
    height: 250px;
    overflow: scroll;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: -1;

    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    
    ${({$isOpen}) => $isOpen && `opacity: 1; transform: translateY(0); z-index: 1`};
`;

export const CountriesDropdownOption = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const SearchInputContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(209, 209, 209);
`

export const SearchInput = styled.input`
//   margin-left: auto;
  display: block;
  width: 98%
`

export const CountriesOptionsContainer = styled.div`
  background-color: rgb(209, 209, 209);
`
export const NameContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    input {
        width: 100%;

        &:first-child {
            margin-right: 15px;
        }
    }
`

export const AddressContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
        margin-bottom: 10px;
    }
`

export const CityStateZipcodeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
        width: 172px;
    }
`

export const StatesDropdownContainer = styled.div`
    position: relative;

    label {
        position: absolute;
        top: 2px;
        left: 18px;
        cursor: pointer;
        color: rgb(128, 128, 128);
    }


`
export const StatesDropdownButton = styled.button`
    width: 140px;
    height: 45px;
    border-radius: 2px;
    cursor: pointer;
    text-align: left;
    margin: 0 10px;
    padding-top: 20px;
    background-color: #fff;
`

export const StatesDropdownContent = styled.div<IsOpenProps>`
    position: absolute;
    background-color: rgb(209, 209, 209);
    cursor: pointer;
    left: 10px;
    width: 140px;
    height: 300px;
    overflow: scroll;
    z-index: 1;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;

    ${({$isOpen}) => $isOpen && `opacity: 1; transform: translateY(0)`};
`

export const StatesDropdownOption = styled.div`
    cursor: pointer;
    padding: 12px 16px;
    &:hover {
        background-color: #ddd;
    }
`

export const OptionalAddressInputContainer = styled.div`
    // position: relative;

    .add {
        margin: 10px;
    }
`

export const OptionalAddressText = styled.span`
    color: rgb(204, 51, 51);
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: rgb(255, 0, 0);
    }
`

export const OptionalAddressInput = styled(CheckoutFormInput)<OptionalAddressInputProps>`
    width: 100%;
    transform: translateY(-10px);
    opacity: 0;
    transition: opacity 100ms ease-in-out; transform 100ms ease-in-out;

    label {
        opacity: 0;
    }

    ${({$isDisplayed}) => $isDisplayed ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform:translateY(0); pointer-events: auto`}
  
`

// ${({isDisplayed}) => isDisplayed ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform:translateY(-20px); pointer-events: auto`}
