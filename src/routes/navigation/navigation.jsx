import React from 'react'
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../Component/cart-icon/cart-icon';
import CartDropdown from '../../Component/cart-dropdown/cart-dropdown';

import { UserContext } from '../../Component/context/userContext';
import { CartContext } from '../../Component/context/cartContext';

import { signOutUser } from '../../Component/util/Firebase/firebase';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.style.scss';

const Navagation = () => {

    const { currentUser } = React.useContext(UserContext);
    // console.log( currentUser);
    const { isCartOpen } = React.useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {currentUser ? (
                        <Link className='nav-link' to='/' onClick={signOutUser}>
                            {' '}
                            SIGN OUT{' '}
                        </Link>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                            Sign IN
                        </Link>
                    )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navagation;