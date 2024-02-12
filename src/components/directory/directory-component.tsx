// import {FC} from 'react';

import { DirectoryContainer } from "./directory-component-styles"
import DirectoryItem from "../Directory Item/directory-item-component";

const directoryData = [
    {
        id: 1,
        categoryName: 'Inks',
        imageUrl: 'https://i.ibb.co/4NzycTv/yamamoto-bleach.jpg',
        route: 'shop/inks'
    },
    {
        id: 2,
        categoryName: 'Illustrations',
        imageUrl: 'https://i.ibb.co/n1V220T/dva.jpg',
        route: 'shop/illustrations'
    },
    {
        id: 3,
        categoryName: 'Fine Art',
        imageUrl: 'https://i.ibb.co/SfsGYKk/Confections-Oilonlinen-16x18in-1250.jpg',
        route: 'shop/fine art'
    },
]

const Directory = () => {
    return (
        <DirectoryContainer>
           {directoryData.map((category) => (<DirectoryItem key={category.id} category={category} ></DirectoryItem>) )}
        </DirectoryContainer>
    );
};

export default Directory;