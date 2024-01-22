import {FC, ReactNode} from 'react';

import { ProductCardContainer, ProductImageContainer, ProductTitle, ButtonContainer } from "./product-card-styles";
import Button from '../Button/button-component';
import { BUTTON_STYLE_CLASSES } from '../Button/button-style-classes';

import { CategoryItem } from "../../utilities/firebase-utilities";
type ProductCardProps = {
    product: CategoryItem;
    children?: ReactNode;
}


const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { name, imageUrl } = product;

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}></img>
            <ProductTitle>{name}</ProductTitle>

            <ButtonContainer>
                <Button buttonType={BUTTON_STYLE_CLASSES.default}>View Details</Button>
                <Button buttonType={BUTTON_STYLE_CLASSES.google}>Add to Cart</Button>
            </ButtonContainer>
            
        </ProductCardContainer>
    );
};

export default ProductCard;

