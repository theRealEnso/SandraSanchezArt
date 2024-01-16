import {FC} from 'react';

import { DirectoryItemContainer, BackgroundImage, BodyContainer} from "./directory-item.styles";

// type CategoryProps = {
//     id: number;
//     categoryName: string;
// }

type DirectoryItemProps = {
    category: {
        id: number;
        categoryName: string;
        imageUrl: string;
        route: string;
    }
}

const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {
    const {categoryName, imageUrl, route} = category
    return (
        <DirectoryItemContainer>

            <BackgroundImage imageURL={imageUrl} />
            <BodyContainer>
                <h2>{categoryName}</h2>
                <p>View More</p>
            </BodyContainer>

        </DirectoryItemContainer>
    );
};

export default DirectoryItem;