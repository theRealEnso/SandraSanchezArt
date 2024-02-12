import { useState, useEffect, useRef, MouseEvent, ChangeEvent } from "react";

import {useStripe, useElements} from '@stripe/react-stripe-js'

import { CheckoutContainer, FormContainer, EmailContainer, DeliveryContainer, DropdownContainer, DropdownButton, DropdownContent, DropdownOption, SearchInputContainer, SearchInput, OptionsContainer, NameContainer, AddressContainer, OptionalAddressInputContainer, OptionalAddressText, OptionalAddressInput } from "./checkout-styles";

import countries from "../../countries";

import CheckoutFormInput from "../../components/Checkout-form-input/checkout-form-input-component";

import PaymentForm from "../../components/payment-form/payment-form-component";

const Checkout = () => {

    const countriesDropdownRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [searchQuery, setSearchQuery] = useState("");
    const [countriesArray, setCountriesArray] = useState<string[]>(countries);
    const [filteredCountries, setFilteredCountries] = useState<string[]>(countriesArray);
    const [formInputs, setFormInputs] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        additionalAddress: "",
    });

    const {email, firstName, lastName, company, address, additionalAddress} = formInputs;

    const [optionalAddressInput, setOptionalAddressInput] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const toggleOptionalAddressInput = () => setOptionalAddressInput(!optionalAddressInput);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };

    const handleButtonClick = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        toggleIsOpen();
    };

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleCountrySelect = (event: MouseEvent) => {
        event.stopPropagation();
        const updatedCountry = (event.target as HTMLElement).textContent; // divs, spans, buttons i.e. "non-form-controls" don't have a `value` attribute so event.target.value doesn't work. Use textContent instead
        setSelectedCountry(updatedCountry || ""); // use empty string if textContent is null
        setIsOpen(false);
        setSearchQuery("");
    };

    useEffect(() => {
        const handleOutsideDropdownClick = (event: MouseEvent<HTMLElement>) => {
            if(countriesDropdownRef.current && !countriesDropdownRef.current.contains(event.target as HTMLElement)){
                setIsOpen(false);
            }
        };

        document.body.addEventListener("click", handleOutsideDropdownClick);

        return () => document.body.removeEventListener("click", handleOutsideDropdownClick);
    },[isOpen])

    useEffect(() => {
        const filteredCountrySearch = countries.filter((country) => country.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredCountries(filteredCountrySearch);
    },[searchQuery, countriesArray])

    return (
        <CheckoutContainer>
            <FormContainer>
                <form>
                    <EmailContainer>
                        <label>Contact</label>
                        <CheckoutFormInput label="Email" type="email" name="email" value={email} onChange={handleInputChange} required></CheckoutFormInput>
                    </EmailContainer>

                    <DeliveryContainer>
                        <label id="delivery-label">Delivery</label>
                        
                        <DropdownContainer>
                            <label htmlFor="countrySelect" onClick={handleButtonClick}>Select Country/Region</label>
                            <DropdownButton type="button" onClick={handleButtonClick}>
                                {selectedCountry}
                            </DropdownButton>

                            <DropdownContent open={isOpen} ref={countriesDropdownRef}>
                                <SearchInputContainer>
                                    <SearchInput type='text' placeholder='Search Countries...' value={searchQuery} onChange={handleSearchInputChange}></SearchInput>
                                </SearchInputContainer>

                                <OptionsContainer>
                                    {filteredCountries.map((country) => (
                                        <DropdownOption key={country} onClick={handleCountrySelect}>{country}</DropdownOption>
                                    ))}
                                </OptionsContainer>
                            </DropdownContent>

                        </DropdownContainer>
                        
                        <NameContainer>
                            <CheckoutFormInput label="First Name" type="text" name="firstName" value={firstName} onChange={handleInputChange} required></CheckoutFormInput>
                            <CheckoutFormInput label="Last Name" type="text" name="lastName" value={lastName} onChange={handleInputChange} required></CheckoutFormInput>
                        </NameContainer>

                        <AddressContainer>
                            <CheckoutFormInput label="Company (optional)" type="text" name="company" value={company} onChange={handleInputChange} className="address-input"></CheckoutFormInput>
                            <CheckoutFormInput label="Address" type="text" name="address" value={address} onChange={handleInputChange} className="address-input" required ></CheckoutFormInput>

                            <OptionalAddressInputContainer>
                                <OptionalAddressText onClick={toggleOptionalAddressInput} className='add'>+ Add appartment, suite, etc</OptionalAddressText>
                                <OptionalAddressInput label={optionalAddressInput ? "Apartment, suite, etc. (optional)" : ""} $isDisplayed={optionalAddressInput} type="text" name="additionalAddress" value={additionalAddress} onChange={handleInputChange}></OptionalAddressInput>
                            </OptionalAddressInputContainer>

                        </AddressContainer>
 
                    </DeliveryContainer>
                </form>
            </FormContainer>

            <PaymentForm></PaymentForm>
        </CheckoutContainer>
    );
};

export default Checkout;