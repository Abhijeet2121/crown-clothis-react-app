import React from 'react';
import { CartContext } from '../context/cartContext';
import Button,{BUTTON_TYPES_CLASSES} from '../button/button'

import {Footer,
        ProductCardContainer,
        Name,
        Price} from'./product-card.style.jsx'

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = React.useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);
    
    return(
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name as='span'>{name}</Name>
            <Price as='span'>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
    </ProductCardContainer>
    );
};

export default ProductCard;