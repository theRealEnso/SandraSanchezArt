import {FC} from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleRouteNavigation = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={handleRouteNavigation}>

            <BackgroundImage imageurl={imageUrl} />
            <BodyContainer>
                <h2>{categoryName}</h2>
                <p>View More</p>
            </BodyContainer>

        </DirectoryItemContainer>
    );
};

export default DirectoryItem;