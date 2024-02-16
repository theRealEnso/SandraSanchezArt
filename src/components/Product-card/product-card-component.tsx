import {FC, ReactNode} from 'react';
import { useNavigate} from 'react-router-dom';

import { ProductCardContainer, ProductTitle, ButtonContainer } from "./product-card-styles";
import Button from '../Button/button-component';
import { BUTTON_STYLE_CLASSES } from '../Button/button-style-classes';


import { CategoryItem } from "../../utilities/firebase-utilities";
type ProductCardProps = {
    product: CategoryItem;
    children?: ReactNode;
}


const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { name, imageUrl, id} = product;

    const navigate = useNavigate();

    const navigateToProductDetails = () => navigate(`${id}`, {state: {product}}); 
    //appends the id to the current route aka relative path
    // const navigateToProductDetails = () => navigate(`/shop/${category}/${id}`) also works as this defines an absolute path. If this is done instead, then we need to pass category as props from the Category component down to the Product card component to construct this absolute url path, and cast category as string so typescript doesn't complain

    return (
        <ProductCardContainer>

            <img src={imageUrl} alt={name}></img>
            <ProductTitle>{name}</ProductTitle>

            <ButtonContainer>
                <Button isLoading={false} buttonType={BUTTON_STYLE_CLASSES.default} onClick={navigateToProductDetails}>View Details</Button>
            </ButtonContainer>

        </ProductCardContainer>
    );
};

export default ProductCard;

