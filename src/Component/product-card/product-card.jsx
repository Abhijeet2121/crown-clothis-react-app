import React from 'react';
import { CartContext } from '../context/cartContext';
import Button from '../button/buton'

import './product-card.style.scss'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = React.useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);
    
    return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div>
    );
};

export default ProductCard;