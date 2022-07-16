
import SignUpForm from '../../Component/sing-up-form/sign-up-form';
import SignInForm from '../../Component/sing-in-form/sign-in-form';
import {AuthenticationContainer} from './authentication.style.jsx'

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;