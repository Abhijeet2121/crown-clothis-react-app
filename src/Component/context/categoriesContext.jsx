import React from "react";

import { getCategoriesAndDocuments } from "../util/Firebase/firebase.js";

export const CategoriesContext = React.createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = React.useState({});

    React.useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();

    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};

