import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../context/cartContext';

import Button from '../button/buton';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
    const { cartItems } = React.useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown; 