import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => { },
});
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap };
    return _jsx(CategoriesContext.Provider, { value: value, children: children });
};
