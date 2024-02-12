import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpFormContainer, ButtonContainer, ColorSpan } from "./sign-up-form.styles";
import FormInput from "../form-inputs/form-input-component";
import Button from "../Button/button-component";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";
import { createAuthUserWithEmailAndPassword, createUserDocOrSignInUserFromAuth } from '../../utilities/firebase-utilities';
import { UserContext } from '../../contexts/user-context';
const SignUpForm = () => {
    const navigate = useNavigate();
    const [formInputs, setFormInputs] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword } = formInputs;
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value
        });
    };
    const clearInputs = () => {
        setFormInputs({ displayName: '', email: '', password: '', confirmPassword: '' });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert(`Passwords do not match!`);
            return;
        }
        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            if (response) {
                const { user } = response;
                await createUserDocOrSignInUserFromAuth(user, { displayName });
                setCurrentUser(user);
            }
        }
        catch (error) {
            console.log(error);
        }
        clearInputs();
    };
    {
        currentUser && navigate('/');
    }
    return (_jsxs(SignUpFormContainer, { children: [_jsx("h2", { children: "Sign Up!" }), _jsx(ColorSpan, { children: "Create an account with email and password" }), _jsxs("form", { onSubmit: handleFormSubmit, children: [_jsx(FormInput, { label: 'User Name', type: 'text', name: 'displayName', value: displayName, required: true, onChange: handleInputChange }), _jsx(FormInput, { label: 'Email', type: 'text', name: 'email', value: email, required: true, onChange: handleInputChange }), _jsx(FormInput, { label: 'Password', type: 'password', name: 'password', value: password, required: true, onChange: handleInputChange }), _jsx(FormInput, { label: 'Confirm Password', type: 'password', name: 'confirmPassword', value: confirmPassword, required: true, onChange: handleInputChange }), _jsx(ButtonContainer, { children: _jsx(Button, { buttonType: BUTTON_STYLE_CLASSES.google, children: "Sign Up" }) })] })] }));
};
export default SignUpForm;
