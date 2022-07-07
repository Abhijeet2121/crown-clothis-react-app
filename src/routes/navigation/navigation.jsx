import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.style.scss';

function Navagation(){
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <CrwnLogo/>
            </Link>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
            </div>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/sign-in'>
                    Sign IN
                </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navagation;