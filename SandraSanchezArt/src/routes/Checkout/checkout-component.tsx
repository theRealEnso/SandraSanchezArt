import { useState, useEffect, useRef, MouseEvent, ChangeEvent } from "react";

import { CheckoutContainer, FormContainer, EmailContainer, DeliveryContainer, DropdownContainer, DropdownButton, DropdownContent, DropdownOption, SearchInputContainer, SearchInput, OptionsContainer, NameContainer, AddressContainer, OptionalAddressInputContainer, OptionalAddressText, OptionalAddressInput } from "./checkout-styles";

import countries from "../../countries";

import CheckoutFormInput from "../../components/Checkout-form-input/checkout-form-input-component";

const Checkout = () => {

    const countriesDropdownRef = useRef<HTMLDivElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [searchQuery, setSearchQuery] = useState("");
    const [countriesArray, setCountriesArray] = useState<string[]>(countries);
    const [filteredCountries, setFilteredCountries] = useState<string[]>(countriesArray);

    const [optionalAddressInput, setOptionalAddressInput] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const toggleOptionalAddressInput = () => setOptionalAddressInput(!optionalAddressInput);

    const handleButtonClick = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        toggleIsOpen();
    }

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const filteredCountrySearch = countries.filter((country) => country.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredCountries(filteredCountrySearch);
    },[searchQuery, countriesArray])

    return (
        <CheckoutContainer>
            <FormContainer>
                <form onSubmit={handleFormSubmit}>
                    <EmailContainer>
                        <label>Contact</label>
                        <CheckoutFormInput label="Email" type="email"required></CheckoutFormInput>
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
                            <CheckoutFormInput label="First Name" type="text"required></CheckoutFormInput>
                            <CheckoutFormInput label="Last Name" type="text" required></CheckoutFormInput>
                        </NameContainer>

                        <AddressContainer>
                            <CheckoutFormInput label="Company (optional)" type="text" className="address-input"></CheckoutFormInput>
                            <CheckoutFormInput label="Address" type="text" required className="address-input"></CheckoutFormInput>

                            <OptionalAddressInputContainer>
                                <OptionalAddressText onClick={toggleOptionalAddressInput} className='add'>+ Add appartment, suite, etc</OptionalAddressText>
                                <OptionalAddressInput label={optionalAddressInput ? "Apartment, suite, etc. (optional)" : ""} isDisplayed={optionalAddressInput} type="text"></OptionalAddressInput>
                            </OptionalAddressInputContainer>

                        </AddressContainer>
 
                    </DeliveryContainer>

                </form>
            </FormContainer>
        </CheckoutContainer>
    );
};

export default Checkout;