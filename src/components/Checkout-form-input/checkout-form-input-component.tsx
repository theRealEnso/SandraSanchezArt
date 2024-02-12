import {FC, InputHTMLAttributes} from 'react';

import {Label, Input, Group} from './checkout-form-input-styles';

type CheckoutInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

const CheckoutFormInput: FC<CheckoutInputProps> = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps}></Input>
            {label && <Label $shrink={Boolean(otherProps.value && otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}>{label}</Label>}
        </Group>
    );
};

export default CheckoutFormInput;