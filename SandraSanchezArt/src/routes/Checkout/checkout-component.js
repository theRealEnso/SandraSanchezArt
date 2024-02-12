import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { CheckoutContainer, FormContainer, EmailContainer, DeliveryContainer, DropdownContainer, DropdownButton, DropdownContent, DropdownOption, SearchInputContainer, SearchInput, OptionsContainer, NameContainer, AddressContainer, OptionalAddressInputContainer, OptionalAddressText, OptionalAddressInput } from "./checkout-styles";
import countries from "../../countries";
import CheckoutFormInput from "../../components/Checkout-form-input/checkout-form-input-component";
import PaymentForm from "../../components/payment-form/payment-form-component";
const Checkout = () => {
    const countriesDropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("United States");
    const [searchQuery, setSearchQuery] = useState("");
    const [countriesArray, setCountriesArray] = useState(countries);
    const [filteredCountries, setFilteredCountries] = useState(countriesArray);
    const [formInputs, setFormInputs] = useState({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        address: "",
        additionalAddress: "",
    });
    const { email, firstName, lastName, company, address, additionalAddress } = formInputs;
    const [optionalAddressInput, setOptionalAddressInput] = useState(false);
    const toggleIsOpen = () => setIsOpen(!isOpen);
    const toggleOptionalAddressInput = () => setOptionalAddressInput(!optionalAddressInput);
    const handleButtonClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        toggleIsOpen();
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };
    const handleCountrySelect = (event) => {
        event.stopPropagation();
        const updatedCountry = event.target.textContent; // divs, spans, buttons i.e. "non-form-controls" don't have a `value` attribute so event.target.value doesn't work. Use textContent instead
        setSelectedCountry(updatedCountry || ""); // use empty string if textContent is null
        setIsOpen(false);
        setSearchQuery("");
    };
    useEffect(() => {
        const handleOutsideDropdownClick = (event) => {
            if (countriesDropdownRef.current && !countriesDropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.body.addEventListener("click", handleOutsideDropdownClick);
        return () => document.body.removeEventListener("click", handleOutsideDropdownClick);
    }, [isOpen]);
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    useEffect(() => {
        const filteredCountrySearch = countries.filter((country) => country.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredCountries(filteredCountrySearch);
    }, [searchQuery, countriesArray]);
    return (_jsx(CheckoutContainer, { children: _jsx(FormContainer, { children: _jsxs("form", { onSubmit: handleFormSubmit, children: [_jsxs(EmailContainer, { children: [_jsx("label", { children: "Contact" }), _jsx(CheckoutFormInput, { label: "Email", type: "email", name: "email", value: email, onChange: handleInputChange, required: true })] }), _jsxs(DeliveryContainer, { children: [_jsx("label", { id: "delivery-label", children: "Delivery" }), _jsxs(DropdownContainer, { children: [_jsx("label", { htmlFor: "countrySelect", onClick: handleButtonClick, children: "Select Country/Region" }), _jsx(DropdownButton, { type: "button", onClick: handleButtonClick, children: selectedCountry }), _jsxs(DropdownContent, { open: isOpen, ref: countriesDropdownRef, children: [_jsx(SearchInputContainer, { children: _jsx(SearchInput, { type: 'text', placeholder: 'Search Countries...', value: searchQuery, onChange: handleSearchInputChange }) }), _jsx(OptionsContainer, { children: filteredCountries.map((country) => (_jsx(DropdownOption, { onClick: handleCountrySelect, children: country }, country))) })] })] }), _jsxs(NameContainer, { children: [_jsx(CheckoutFormInput, { label: "First Name", type: "text", name: "firstName", value: firstName, onChange: handleInputChange, required: true }), _jsx(CheckoutFormInput, { label: "Last Name", type: "text", name: "lastName", value: lastName, onChange: handleInputChange, required: true })] }), _jsxs(AddressContainer, { children: [_jsx(CheckoutFormInput, { label: "Company (optional)", type: "text", name: "company", value: company, onChange: handleInputChange, className: "address-input" }), _jsx(CheckoutFormInput, { label: "Address", type: "text", name: "address", value: address, onChange: handleInputChange, className: "address-input", required: true }), _jsxs(OptionalAddressInputContainer, { children: [_jsx(OptionalAddressText, { onClick: toggleOptionalAddressInput, className: 'add', children: "+ Add appartment, suite, etc" }), _jsx(OptionalAddressInput, { label: optionalAddressInput ? "Apartment, suite, etc. (optional)" : "", "$isDisplayed": optionalAddressInput, type: "text", name: "additionalAddress", value: additionalAddress, onChange: handleInputChange })] })] })] }), _jsx(PaymentForm, {})] }) }) }));
};
export default Checkout;
