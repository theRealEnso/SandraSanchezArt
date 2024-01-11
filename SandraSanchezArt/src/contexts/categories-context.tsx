import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { CategoryMap, getCategoriesAndDocuments } from "../utilities/firebase-utilities";

type CategoriesContextProps = {
    categoriesMap: CategoryMap | void;
    setCategoriesMap: React.Dispatch<React.SetStateAction<CategoryMap | void>>
}

type CategoriesProviderProps = {
    children: ReactNode;
};

export const CategoriesContext = createContext<CategoriesContextProps>({
    categoriesMap: {},
    setCategoriesMap: () => {},
});

export const CategoriesProvider: FC<CategoriesProviderProps> = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState<CategoryMap | void>({});
    const value = {categoriesMap, setCategoriesMap};

    useEffect(() => {
        const getData = async () => {
          try {
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
          } catch (error) {
            console.log(error)
          }
        }
        getData();
      },[])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};