import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from 'react'; // ChangeEvent and FormEvent to fix type error in functions
import { useNavigate } from 'react-router-dom';
import { SignInFormContainer, ButtonContainer, ColorSpan } from './sign-in-form.styles';
import FormInput from '../form-inputs/form-input-component';
import { BUTTON_STYLE_CLASSES } from '../Button/button-style-classes';
import Button from '../Button/button-component';
import { UserContext } from '../../contexts/user-context';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocOrSignInUserFromAuth } from '../../utilities/firebase-utilities';
const SignInForm = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formInputs;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value
        });
    };
    // console.log(formInputs);
    const clearInputs = () => {
        setFormInputs({ email: '', password: '' });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            if (response) {
                const { user } = response;
                setCurrentUser(user);
            }
        }
        catch (error) {
            console.log(`There was an error signing in: ${error}`);
        }
        clearInputs();
    };
    const googleSignIn = async () => {
        try {
            const response = await signInWithGooglePopup();
            console.log(response);
            if (response) {
                const { user } = response;
                await createUserDocOrSignInUserFromAuth(user);
                setCurrentUser(user);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    {
        currentUser && navigate('/');
    }
    return (_jsxs(SignInFormContainer, { children: [_jsx("h2", { children: "Already have an account?" }), _jsx(ColorSpan, { children: "Sign in with your email and password" }), _jsxs("form", { onSubmit: handleFormSubmit, children: [_jsx(FormInput, { label: 'email', type: 'email', name: 'email', value: email, required: true, onChange: handleInputChange }), _jsx(FormInput, { label: 'password', type: 'password', name: 'password', value: password, required: true, onChange: handleInputChange }), _jsxs(ButtonContainer, { children: [_jsx(Button, { buttonType: BUTTON_STYLE_CLASSES.default, children: "Sign In With Email" }), _jsx(Button, { buttonType: BUTTON_STYLE_CLASSES.google, type: 'submit', onClick: googleSignIn, children: "Sign In With Google" })] })] })] }));
};
export default SignInForm;
