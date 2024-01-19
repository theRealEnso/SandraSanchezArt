import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { CategoryMap, getCategoriesAndDocuments } from "../utilities/firebase-utilities";

type CategoriesContextProps = {
    categoriesMap: CategoryMap;
    setCategoriesMap: React.Dispatch<React.SetStateAction<CategoryMap>>
}

type CategoriesProviderProps = {
    children: ReactNode;
};

export const CategoriesContext = createContext<CategoriesContextProps>({
    categoriesMap: {} as CategoryMap,
    setCategoriesMap: () => {},
});

export const CategoriesProvider: FC<CategoriesProviderProps> = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState<CategoryMap>({});
    const value = {categoriesMap, setCategoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};