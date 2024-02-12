import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label, Input, Group } from './form-input-styles';
const FormInput = ({ label, ...otherProps }) => {
    // console.log(otherProps); // short hand for `other properties` aka "PROPS" that are in the input (e.g. name, onChange, type, value, required, etc)
    // console.log(otherProps.value); // grabs whatever user types into the input
    return (_jsxs(Group, { children: [_jsx(Input, { ...otherProps }), label && (_jsx(Label, { shrink: Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length), children: label }))] }));
};
export default FormInput;
