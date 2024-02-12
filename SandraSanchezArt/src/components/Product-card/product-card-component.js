import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { ProductCardContainer, ProductTitle, ButtonContainer } from "./product-card-styles";
import Button from '../Button/button-component';
import { BUTTON_STYLE_CLASSES } from '../Button/button-style-classes';
const ProductCard = ({ product }) => {
    const { name, imageUrl, id } = product;
    const navigate = useNavigate();
    const navigateToProductDetails = () => navigate(`${id}`, { state: { product } });
    //appends the id to the current route aka relative path
    // const navigateToProductDetails = () => navigate(`/shop/${category}/${id}`) also works as this defines an absolute path. If this is done instead, then we need to pass category as props from the Category component down to the Product card component to construct this absolute url path, and cast category as string so typescript doesn't complain
    return (_jsxs(ProductCardContainer, { children: [_jsx("img", { src: imageUrl, alt: name }), _jsx(ProductTitle, { children: name }), _jsx(ButtonContainer, { children: _jsx(Button, { buttonType: BUTTON_STYLE_CLASSES.default, onClick: navigateToProductDetails, children: "View Details" }) })] }));
};
export default ProductCard;
