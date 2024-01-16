import { Label, Input, Group } from './form-input-styles';

import {FC, InputHTMLAttributes} from 'react';

type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({label, ...otherProps}) => {
    // console.log(otherProps); // short hand for `other properties` aka "PROPS" that are in the input (e.g. name, onChange, type, value, required, etc)
    // console.log(otherProps.value); // grabs whatever user types into the input
    return (
        <Group>
            <Input {...otherProps}></Input>
            {label && (<Label shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>{label}</Label>)}
        </Group>
    )
};

export default FormInput;