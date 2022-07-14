import React from 'react';
import { Fragment } from 'react';

import { CategoriesContext } from '../../Component/context/categoriesContext';
import CategoryPreview from '../../Component/category-preview/category-preview';

const CategoriesPreview = () => {
    const { categoriesMap } = React.useContext(CategoriesContext);

    return (
        <Fragment>

        {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
                <CategoryPreview key={title} title={title} products={products}/> 
                )
            })}
        </Fragment>
    )
}
 
export default CategoriesPreview;