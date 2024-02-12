import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label, Input, Group } from './checkout-form-input-styles';
const CheckoutFormInput = ({ label, ...otherProps }) => {
    return (_jsxs(Group, { children: [_jsx(Input, { ...otherProps }), label && _jsx(Label, { "$shrink": Boolean(otherProps.value && otherProps.value && typeof otherProps.value === "string" && otherProps.value.length), children: label })] }));
};
export default CheckoutFormInput;
