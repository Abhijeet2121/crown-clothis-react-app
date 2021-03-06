import React from 'react';

import FormInput from '../form-input/form-input';
import Button, {BUTTON_TYPES_CLASSES} from '../button/button';

import {
    signInWithGooglePopup,
    // createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../util/Firebase/firebase'

import {SignInContainer, ButtonsContainer} from "./sign-in-form.style.jsx"

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = React.useState(defaultFormFields);
    const { email, password } = formFields;
    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            // console.log(user);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user is associated with this email');
                    break;

                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    };
    
    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>

            </form>
        </SignInContainer>
    )
}

export default SignInForm;