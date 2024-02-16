import { useState, useEffect, useContext, useRef, MouseEvent, ChangeEvent, FormEvent } from "react";

import { UserContext } from "../../contexts/user-context";

import {FormContainer, EmailContainer, DeliveryContainer, CountriesDropdownContainer, CountriesDropdownButton, CountriesDropdownContent, CountriesDropdownOption, SearchInputContainer, SearchInput, CountriesOptionsContainer, NameContainer, AddressContainer, CityStateZipcodeContainer, OptionalAddressInputContainer, OptionalAddressText, OptionalAddressInput, StatesDropdownContainer, StatesDropdownButton, StatesDropdownContent, StatesDropdownOption, PaymentFormContainer, PaymentButton } from './payment-form.styles';

import countries from "../../countries";
import states from "../../USA-states";

import CheckoutFormInput from "../../components/Checkout-form-input/checkout-form-input-component";

import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";

import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

const PaymentForm = () => {
    const {currentUser} = useContext(UserContext);

    const countriesDropdownRef = useRef<HTMLDivElement | null>(null);
    const stateDropdownRef = useRef<HTMLDivElement | null>(null);

    const [isCountriesSelectDropdownOpen, setIsCountriesSelectDropdownOpen] = useState(false);
    const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
    const [countriesArray, setCountriesArray] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [searchQuery, setSearchQuery] = useState("");
    const [statesArray, setStatesArray] = useState(states);
    const [selectedState, setSelectedState] = useState('California');
    const [filteredCountries, setFilteredCountries] = useState<string[]>(countriesArray);
    const [formInputs, setFormInputs] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        streetAddress: "",
        city: "",
        state: "",
        zipOrPostalCode: "",
        additionalAddress: "",
    });

    const {email, firstName, lastName, company, streetAddress, city, state, zipOrPostalCode, additionalAddress} = formInputs;

    const [optionalAddressInput, setOptionalAddressInput] = useState(false);

    const toggleCountrySelectDropdown = () => setIsCountriesSelectDropdownOpen(!isCountriesSelectDropdownOpen);

    const toggleStateSelectDropdown = () => setIsStateDropdownOpen(!isStateDropdownOpen);

    const toggleOptionalAddressInput = () => setOptionalAddressInput(!optionalAddressInput);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };

    const handleCountryButtonClick = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        toggleCountrySelectDropdown();
    };

    const handleStateButtonClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        toggleStateSelectDropdown();
    }

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleCountrySelect = (event: MouseEvent) => {
        event.stopPropagation();
        const updatedCountry = (event.target as HTMLElement).textContent; // divs, spans, buttons i.e. "non-form-controls" don't have a `value` attribute so event.target.value doesn't work. Use textContent instead
        setSelectedCountry(updatedCountry || ""); // use empty string if textContent is null
        setIsCountriesSelectDropdownOpen(false);
        setSearchQuery("");
    };

    const handleStateSelect = (event: MouseEvent) => {
        event.stopPropagation();
        const updatedState = (event.target as HTMLElement).textContent;
        setSelectedState(updatedState);
        setIsStateDropdownOpen(false);
    };

    const clearFormInputs = () => {
        setFormInputs({email: "", firstName: "", lastName: "", company: "", streetAddress: "", city: "", state: "", zipOrPostalCode: "", additionalAddress: ""})
    }

    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (event: FormEvent) => {
        event.preventDefault();

        if(!stripe || !elements) return;

        const customerInformation = {
            name: currentUser ? currentUser.displayName : `${firstName} ${lastName}`,
            email: currentUser ? currentUser.email : email,
            address: additionalAddress.length ? `${streetAddress}, ${additionalAddress}` : `${streetAddress}`,
        };

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: 10000,
                customerInformation: customerInformation, 
            })
        }).then(response => response.json());

        console.log(response);

        const {paymentIntent: {client_secret}} = response;
        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Ben Vu',
                }
            },
        });

        if(paymentResult.error){
            alert(paymentResult.error)
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert("Payment Successful!");
                console.log(paymentResult);
                clearFormInputs();
            };
        };
    };

    useEffect(() => {
        const handleOutsideDropdownClick = (event: MouseEvent<HTMLElement>) => {
            const clickedElement = event.target as HTMLElement
            if(countriesDropdownRef.current && !countriesDropdownRef.current.contains(clickedElement)){
                setIsCountriesSelectDropdownOpen(false);
            };
        };

        document.body.addEventListener("click", handleOutsideDropdownClick);

        return () => document.body.removeEventListener("click", handleOutsideDropdownClick);
    },[isCountriesSelectDropdownOpen])

    useEffect(() => {
        const filteredCountrySearch = countries.filter((country) => country.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredCountries(filteredCountrySearch);
    },[searchQuery, countriesArray])

    useEffect(() => {
        const handleOutsideStateDropdownClick = (event: MouseEvent<HTMLElement>) => {
            const clickedElement = event.target as HTMLElement;
            if(stateDropdownRef.current && !stateDropdownRef.current.contains(clickedElement)){
                setIsStateDropdownOpen(false);
            };
        };

        document.body.addEventListener("click", handleOutsideStateDropdownClick);

        return () => document.body.removeEventListener("click", handleOutsideStateDropdownClick);
    }, [isStateDropdownOpen])


    return (
        <FormContainer>
            <form onSubmit={handlePayment}>
                <EmailContainer>
                    <label>Contact</label>
                    <CheckoutFormInput label="Email" type="email" name="email" value={email} onChange={handleInputChange} required></CheckoutFormInput>
                </EmailContainer>

                <DeliveryContainer>
                    <label id="delivery-label">Delivery</label>
                    
                    <CountriesDropdownContainer>
                        <label htmlFor="countrySelect" onClick={handleCountryButtonClick}>Select Country/Region</label>
                        <CountriesDropdownButton type="button" onClick={handleCountryButtonClick}>
                            {selectedCountry}
                        </CountriesDropdownButton>

                        <CountriesDropdownContent $isOpen={isCountriesSelectDropdownOpen} ref={countriesDropdownRef}>
                            <SearchInputContainer>
                                <SearchInput type='text' placeholder='Search Countries...' value={searchQuery} onChange={handleSearchInputChange}></SearchInput>
                            </SearchInputContainer>

                            <CountriesOptionsContainer>
                                {filteredCountries.map((country) => (
                                    <CountriesDropdownOption key={country} onClick={handleCountrySelect}>{country}</CountriesDropdownOption>
                                ))}
                            </CountriesOptionsContainer>
                        </CountriesDropdownContent>
                    </CountriesDropdownContainer>
                    
                    <NameContainer>
                        <CheckoutFormInput label="First Name" type="text" name="firstName" value={firstName} onChange={handleInputChange} required></CheckoutFormInput>
                        <CheckoutFormInput label="Last Name" type="text" name="lastName" value={lastName} onChange={handleInputChange} required></CheckoutFormInput>
                    </NameContainer>

                    <AddressContainer>
                        <CheckoutFormInput label="Company (optional)" type="text" name="company" value={company} onChange={handleInputChange}></CheckoutFormInput>
                        <CheckoutFormInput label="Address" type="text" name="streetAddress" value={streetAddress} onChange={handleInputChange} required ></CheckoutFormInput>

                        <CityStateZipcodeContainer>
                            <CheckoutFormInput label="City" name="city" value={city} onChange={handleInputChange} required></CheckoutFormInput>
                                    
                            <StatesDropdownContainer>
                                <label onClick={handleStateButtonClick}>Select State</label>
                                <StatesDropdownButton onClick={handleStateButtonClick}>{selectedState}</StatesDropdownButton>

                                <StatesDropdownContent $isOpen={isStateDropdownOpen} ref={stateDropdownRef}>
                                    {statesArray.map((state) => (
                                        <StatesDropdownOption key={state} onClick={handleStateSelect}>{state}</StatesDropdownOption>
                                    ))}
                                </StatesDropdownContent>
                            </StatesDropdownContainer>

                            <CheckoutFormInput label="Zip / Postal Code" name="zipOrPostalCode" value={zipOrPostalCode} required></CheckoutFormInput>
                        </CityStateZipcodeContainer>

                        <OptionalAddressInputContainer>
                            <OptionalAddressText onClick={toggleOptionalAddressInput} className='add'>+ Add appartment, suite, etc</OptionalAddressText>
                            <OptionalAddressInput label={optionalAddressInput ? "Apartment, suite, etc. (optional)" : ""} $isDisplayed={optionalAddressInput} type="text" name="additionalAddress" value={additionalAddress} onChange={handleInputChange}></OptionalAddressInput>
                        </OptionalAddressInputContainer>

                    </AddressContainer>

                </DeliveryContainer>

            </form>

            <PaymentFormContainer>
                <h2>Credit Card Payment:</h2>
                <CardElement></CardElement>
                <PaymentButton buttonType={BUTTON_STYLE_CLASSES.google}>PAY NOW</PaymentButton>
            </PaymentFormContainer>
        </FormContainer>
    )
};

export default PaymentForm;