import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../context/cartContext';
import {CartIconContainer,
         ItemCount} from './cart.icon.style.jsx'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = React.useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon