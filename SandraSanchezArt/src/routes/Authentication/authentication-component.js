import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignInForm from "../../components/sign-in-form/sign-in-form-component";
import { AuthenticationContainer } from "./authentication-styles";
const Authentication = () => {
    return (_jsxs(AuthenticationContainer, { children: [_jsx(SignInForm, {}), _jsx(SignUpForm, {})] }));
};
export default Authentication;
