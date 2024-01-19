import {FC, ReactNode} from 'react';

import { ProductCardContainer } from "./product-card-styles";
import { CategoryItem } from "../../utilities/firebase-utilities";

type ProductCardProps = {
    product: CategoryItem;
    children?: ReactNode;
}


const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { name, description, id, sizesAndPrices, imageUrl } = product;

    return (
        <ProductCardContainer>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} />
            <p>{description}</p>
            <div>
                <h3>Sizes and Prices:</h3>
                <ul>
                    {sizesAndPrices.map(({ size, price }) => (
                        <li key={size}>
                            Size: {size}, Price: ${price}
                        </li>
                    ))}
                </ul>
            </div>
            <p>id: {id}</p>
        </ProductCardContainer>
    );
};

export default ProductCard;