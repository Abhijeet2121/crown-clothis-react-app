
import SignUpForm from '../../Component/sing-up-form/sign-up-form';
import SignInForm from '../../Component/sing-in-form/sign-in-form';
import './authentication.style.scss'

const Authentication = () => {

    return (
        <div className='authentication-containe'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;