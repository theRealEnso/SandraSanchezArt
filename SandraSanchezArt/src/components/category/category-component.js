import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContainer } from './category-styles';
import { CategoriesContext } from "../../contexts/categories-context";
import ProductCard from '../Product-card/product-card-component';
const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    const { category } = useParams();
    const [items, setItems] = useState(categoriesMap[category]);
    useEffect(() => {
        setItems(categoriesMap[category]);
    }, [categoriesMap, category]);
    console.log(items);
    // console.log(items[0].sizesAndPrices[0]);
    // console.log(typeof items[0].sizesAndPrices);
    return (_jsx(CategoryContainer, { children: items && items.map((item) => (_jsx(ProductCard, { product: item, children: item.sizesAndPrices.map((sizeAndPrice) => (_jsxs("div", { children: ["Size: ", sizeAndPrice.size, ", Price: ", sizeAndPrice.price] }, sizeAndPrice.size))) }, item.id))) }));
};
export default Category;
