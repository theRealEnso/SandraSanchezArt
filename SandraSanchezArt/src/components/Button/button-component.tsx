import { DefaultButton, GoogleButton } from './button-styles';
import { BUTTON_STYLE_CLASSES } from './button-style-classes';

// function that returns an object literal with computed property names to look up the correct button based on the buttonType property that is passed
//keys are values inside BUTTON_STYLE_CLASSES object, corresponding values are styled button components
//`buttonType` is provided as an argument to dynamically select the styled button component from the object
const getButton = (buttonType = BUTTON_STYLE_CLASSES.default) => (
    {
        [BUTTON_STYLE_CLASSES.default]: DefaultButton,
        [BUTTON_STYLE_CLASSES.google]: GoogleButton,
    }[buttonType]
)

const Button = ({buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType)
    return <CustomButton {...otherProps}></CustomButton>
}

export default Button;

// const BUTTON_STYLE_CLASSES = {
//     default: 'default',
//     google: 'google',
// };