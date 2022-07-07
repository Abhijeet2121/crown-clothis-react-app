import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../Component/util/Firebase/firebase'

import SignUpForm from '../../Component/sing-up-form/sign-up-form';

function SignIn() {
    const logGoogleUser = async function() {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return(
        <div>
            <h1> Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with google</button>
            <SignUpForm/>
        </div>
    );
};

export default SignIn;