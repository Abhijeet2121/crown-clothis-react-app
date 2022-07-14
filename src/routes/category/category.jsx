import React from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Component/product-card/product-card';
import { CategoriesContext } from '../../Component/context/categoriesContext';
import './category.style.scss';
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
            <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {products && 
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))}
        </div>
    </Fragment>
    );
};

export default Category;