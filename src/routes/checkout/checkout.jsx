import React from 'react';
import CheckoutItem from '../../Component/checkout-item/checkout-item';
import { CartContext } from '../../Component/context/cartContext';

import {CheckoutContainer,
        CheckoutHeader,
        HeaderBlock,
        Total} from './checkout.style.jsx'

const Checkout = () => {

    const { cartItems, cartTotal } = React.useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader as='span'>
                <HeaderBlock>
                    Product
                </HeaderBlock>
                <HeaderBlock as='span'>
                    Description
                </HeaderBlock>
                <HeaderBlock as='span'>
                    Quantity
                </HeaderBlock>
                <HeaderBlock as='span'>
                    Price
                </HeaderBlock>
                <HeaderBlock as='span'>
                    Remove
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <Total>Total : ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;