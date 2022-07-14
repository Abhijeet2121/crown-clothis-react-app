import React from 'react';
import CheckoutItem from '../../Component/checkout-item/checkout-item';
import { CartContext } from '../../Component/context/cartContext';

import './checkout.style.scss'

const Checkout = () => {

    const { cartItems, cartTotal } = React.useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className='total'>Total : ${cartTotal}</span>
        </div>
    );
}

export default Checkout;