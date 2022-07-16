import React from 'react'
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../Component/cart-icon/cart-icon';
import CartDropdown from '../../Component/cart-dropdown/cart-dropdown';

import { UserContext } from '../../Component/context/userContext';
import { CartContext } from '../../Component/context/cartContext';

import { signOutUser } from '../../Component/util/Firebase/firebase';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import {
    NavagationContainer,
    LogoContainer,
    NavLinks,
    NavLink
} from './navigation.style.jsx';

const Navagation = () => {

    const { currentUser } = React.useContext(UserContext);
    // console.log( currentUser);
    const { isCartOpen } = React.useContext(CartContext);

    return (
        <Fragment>
            <NavagationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' to='/' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavagationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navagation;