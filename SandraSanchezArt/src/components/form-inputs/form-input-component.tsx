import { Label, Input, Group } from './form-input-styles';

import {FC, InputHTMLAttributes} from 'react';

type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps}></Input>
            {label && (<Label shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>{label}</Label>)}
        </Group>
    )
};

export default FormInput;