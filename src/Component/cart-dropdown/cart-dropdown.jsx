import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../context/cartContext';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import {CartDropdownContainer,
         EmptyMessage,
         CartItems,
         } from './cart-dropdown.style.jsx';

const CartDropdown = () => {
    const { cartItems } = React.useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) =>
                    <CartItem key={item.id} cartItem={item} />)
                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown; 