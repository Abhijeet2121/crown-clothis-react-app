import React from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Component/product-card/product-card';
import { CategoriesContext } from '../../Component/context/categoriesContext';
import {CategoryContainer, CategoryTitle} from './category.style.jsx';
import { Fragment } from 'react';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = React.useContext(CategoriesContext);
    const [products, setProducts] = React.useState(categoriesMap[category]);

    React.useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            {products && 
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))}
        </CategoryContainer>
    </Fragment>
    );
};

export default Category;