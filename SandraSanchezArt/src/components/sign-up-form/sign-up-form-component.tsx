import {useState, ChangeEvent, FormEvent} from 'react';
import { SignUpFormContainer, ButtonContainer, ColorSpan } from "./sign-up-form.styles";
import FormInput from "../form-inputs/form-input-component";

import Button from "../Button/button-component";
import { BUTTON_STYLE_CLASSES } from "../Button/button-style-classes";

import { createAuthUserWithEmailAndPassword, createUserDocOrSignInUserFromAuth } from '../../utilities/firebase-utilities';

const SignUpForm = () => {
    const [formInputs, setFormInputs] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const {displayName, email, password, confirmPassword} = formInputs;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value
        });
    };

    const clearInputs = () => {
        setFormInputs({displayName: '', email: '', password: '', confirmPassword: ''});
    };

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert(`Passwords do not match!`);
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
            if(response){
                const {user} = response;
                await createUserDocOrSignInUserFromAuth(user, {displayName});
            }
        } catch(error){
            console.log(error);
        }

        clearInputs();
    }
    return (
        <SignUpFormContainer>
            <h2>Sign Up!</h2>
            <ColorSpan>Create an account with email and password</ColorSpan>
            <form onSubmit={handleFormSubmit}>
                <FormInput label='User Name' type='text' name='displayName' value={displayName} required onChange={handleInputChange}></FormInput>
                <FormInput label='Email' type='text' name='email' value={email} required onChange={handleInputChange}></FormInput>
                <FormInput label='Password' type='password' name='password' value={password} required onChange={handleInputChange}></FormInput>
                <FormInput label='Confirm Password' type='password' name='confirmPassword' value={confirmPassword} required onChange={handleInputChange}></FormInput>

                <ButtonContainer>
                    <Button buttonType={BUTTON_STYLE_CLASSES.google}>Sign Up</Button>
                </ButtonContainer>
            </form>

        </SignUpFormContainer>
    );
};

export default SignUpForm;