import {useState, useContext, ChangeEvent, FormEvent} from 'react'; // ChangeEvent and FormEvent to fix type error in functions
import { useNavigate } from 'react-router-dom';

import {SignInFormContainer, ButtonContainer, ColorSpan} from './sign-in-form.styles';
import FormInput from '../form-inputs/form-input-component';
import { BUTTON_STYLE_CLASSES } from '../Button/button-style-classes';
import Button from '../Button/button-component';

import { UserContext } from '../../contexts/user-context';

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocOrSignInUserFromAuth } from '../../utilities/firebase-utilities';

const SignInForm = () => {
    const navigate = useNavigate();

    const {currentUser, setCurrentUser} = useContext(UserContext);

    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formInputs;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormInputs({
            ...formInputs,
            [name]: value
        });
    };

    // console.log(formInputs);

    const clearInputs = () => {
        setFormInputs({email: '', password: ''});
    }

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            if(response){
                const {user} = response;
                setCurrentUser(user);
            }
        } catch(error){
            console.log(`There was an error signing in: ${error}`)
        }

        clearInputs();
    };

    const googleSignIn = async () => {
        try {
            const response = await signInWithGooglePopup();
            console.log(response);
            if(response){
                const {user} = response;
                await createUserDocOrSignInUserFromAuth(user);
                setCurrentUser(user);
            }
        } catch (error) {
            console.log(error);
        }
    };

    {currentUser && navigate('/')}

    return (
        <SignInFormContainer>
            <h2>Already have an account?</h2>
            <ColorSpan>Sign in with your email and password</ColorSpan>
            <form onSubmit={handleFormSubmit}>
                <FormInput label='email' type='email' name='email' value={email} required onChange={handleInputChange}></FormInput>
                <FormInput label='password' type='password' name='password' value={password} required onChange={handleInputChange}></FormInput>

                <ButtonContainer>
                    <Button buttonType={BUTTON_STYLE_CLASSES.default}>Sign In With Email</Button>
                    <Button buttonType={BUTTON_STYLE_CLASSES.google} type='submit' onClick={googleSignIn}>Sign In With Google</Button>
                </ButtonContainer>
            </form>
        </SignInFormContainer>
    );
};

export default SignInForm;

// user
// : 
// _UserImpl
// accessToken
// : 
// "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjSg5NDE1ZWMyM2EzMzdlMmJiYWE1ZTNlNjhiNjZkYzk5MzY4ODQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQmVuIFZ1IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lfYXlIdjJDU00wVWlERktlRHI4MUpuU1NnaHdEbEdpeUsyTHBuTUNTMDJRPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NhbmRyYS1zYW5jaGV6LWFydCIsImF1ZCI6InNhbmRyYS1zYW5jaGV6LWFydCIsImF1dGhfdGltZSI6MTcwNDY5NTYyNSwidXNlcl9pZCI6InU3VzlkU2h0ZlZldjNYdnY3NkZRRXhidWFzRjMiLCJzdWIiOiJ1N1c5ZFNodGZWZXYzWHZ2NzZGUUV4YnVhc0YzIiwiaWF0IjoxNzA0Njk1NjI1LCJleHAiOjE3MDQ2OTkyMjUsImVtYWlsIjoiYmVubm5ubm5udnVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTczNDI2NDAwMjkxMjU1NTM2NDAiXSwiZW1haWwiOlsiYmVubm5ubm5udnVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.HBRqJd7dxaPbSBiZU31Dt3NT144GdhxqMEwJlkC5HQl7QRwF8h0zZjIt3OamwbTfkAvMlvt-OA-qF_huezz6cVEciKfrKIfLB9wF5Akd7pCW0SRN8A9mlb-TZS9sGMYEPMNBq5ft6qjV9dO8BpwdZNrU7eA2JRcCfJZdrUiukObuDYfqhNRmrBr1Uw8gNPN-pjz15pOdh1Nyx_AdRwSa_FkghhO-gaevpfR3Gb9cio2muq-4-w_s4eGHFxR95AGB_o5dL7RXiCutlAYZJT_SFAf0cLf7MnMNWlqgXlNFiBz4Ccbt3CmcsD1QEu0XuPAG_K6DCOr9H5GfZgVFRGxcoQ"
// auth
// : 
// AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: _UserImpl, …}
// displayName
// : 
// "Ben Vu"
// email
// : 
// "bennnnnnnvu@gmail.com"
// emailVerified
// : 
// true
// isAnonymous
// : 
// false
// metadata
// : 
// UserMetadata {createdAt: '1704518958711', lastLoginAt: '1704695625607', lastSignInTime: 'Mon, 08 Jan 2024 06:33:45 GMT', creationTime: 'Sat, 06 Jan 2024 05:29:18 GMT'}
// phoneNumber
// : 
// null
// photoURL
// : 
// "https://lh3.googleusercontent.com/a/ACg8ocI_ayHv2CSM0UiDFKeDr81JnSSghwDlGiyK2LpnMCS02Q=s96-c"
// proactiveRefresh
// : 
// ProactiveRefresh {user: _UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
// providerData
// : 
// [{…}]
// providerId
// : 
// "firebase"
// reloadListener
// : 
// null
// reloadUserInfo
// : 
// {localId: 'u7W9dShtfVev3Xvv76FQExbuasF3', email: 'bennnnnnnvu@gmail.com', displayName: 'Ben Vu', photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocI_ayHv2CSM0UiDFKeDr81JnSSghwDlGiyK2LpnMCS02Q=s96-c', emailVerified: true, …}
// stsTokenManager
// : 
// _StsTokenManager {refreshToken: 'AMf-vBzWkPN67sNQP_K21Z5uxLHjncSthy6svKwjEj5kCCu4-m…D3AGV9HueF6brwP-SxDrRI4oyCMhSLACPHc3CzYYMhHDhsJOY', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxNjg5NDE1ZWMyM2EzMz…lNFiBz4Ccbt3CmcsD1QEu0XuPAG_K6DCOr9H5GfZgVFRGxcoQ', expirationTime: 1704699225642}
// tenantId
// : 
// null
// uid
// : 
// "u7W9dShtfVev3Xvv76FQExbuasF3"
// refreshToken
// : 
// (...)
// [[Prototype]]
// : 
// Object
// _tokenResponse
// : 
// {federatedId: 'https://accounts.google.com/117342640029125553640', providerId: 'google.com', email: 'bennnnnnnvu@gmail.com', emailVerified: true, firstName: 'Ben', …}