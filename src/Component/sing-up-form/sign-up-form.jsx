import React from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../util/Firebase/firebase'
import FormInput from '../form-input/form-input';
import Button from '../button/buton';

const defaultFormFields ={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}

function SignUpForm() {
    const [formFields, setFormFields] = React.useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields)

    function resetFormFields(){
        setFormFields(defaultFormFields);
    }

    async function handleSubmit(event) {
            event.preventDefault();

        if( password !== confirmPassword){
            alert('password do not match');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already exist');
            } else {
                console.error('user creation encountered an error', error);
            }
        }
    };

    function handleChange(event){
        const {name, value} = event.target;

        setFormFields({
            ...formFields, 
            [name]: value
        });
    };
    return (
        <div className='sign-up-container'>
            <h2>Dont have an account?</h2>
            <span> Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput 
                    label="ConfirmPassword"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    ) 

}

export default SignUpForm;