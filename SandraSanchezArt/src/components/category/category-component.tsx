import {useContext, useState, useEffect, FC} from 'react';
import { useParams} from 'react-router-dom';

import { CategoryContainer } from './category-styles';

import { CategoriesContext } from "../../contexts/categories-context";

import ProductCard from '../Product-card/product-card-component';

import { CategoryItem } from '../../utilities/firebase-utilities';



const Category: FC = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    const {category} = useParams();

    const [items, setItems] = useState(categoriesMap[category as string]);

    useEffect(() => {
        setItems(categoriesMap[category as string]);
    },[categoriesMap, category]);

    console.log(items);
    // console.log(items[0].sizesAndPrices[0]);
    // console.log(typeof items[0].sizesAndPrices);

    return (
        <CategoryContainer>
            {items && items.map((item: CategoryItem) => (
                <ProductCard key={item.id} product={item}>
                    {item.sizesAndPrices.map((sizeAndPrice) => (
                        <div key={sizeAndPrice.size}>
                            Size: {sizeAndPrice.size}, Price: {sizeAndPrice.price}
                        </div>
                    ))}
                </ProductCard>))}
        </CategoryContainer>
    );
};

export default Category;

//notes to self for errors:

//Uncaught Error: Objects are not valid as a React child (found: object with keys {price, size}). If you meant to render a collection of children, use an array instead.
// => this is due to the sizeAndPrices object-- `key` with the corresponding value of an array containing additional nested objects in each product object.
// (reminder that arrays are actually objects under the hood in JS so don't be confused!!)
// the entire `sizesAndPrices` object was being passed into the ProductCard component, and React complains because it can't directly render an object
// Instead of passing the entire object, we need to map over the sizesAndPrices array and render each size and price separately.

// type error is occurring due to children being passed (i.e. the inner <div> elements) to the ProductCard component, but the ProductCardProps type in the ProductCard component does not include a children property. To fix this, update the ProductCardProps Type to include React.ReactNode for the children