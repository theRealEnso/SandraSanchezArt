import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer, BackgroundImage, BodyContainer } from "./directory-item.styles";
const DirectoryItem = ({ category }) => {
    const { categoryName, imageUrl, route } = category;
    const navigate = useNavigate();
    const handleRouteNavigation = () => navigate(route);
    return (_jsxs(DirectoryItemContainer, { onClick: handleRouteNavigation, children: [_jsx(BackgroundImage, { "$imageurl": imageUrl }), _jsxs(BodyContainer, { children: [_jsx("h2", { children: categoryName }), _jsx("p", { children: "View More" })] })] }));
};
export default DirectoryItem;
