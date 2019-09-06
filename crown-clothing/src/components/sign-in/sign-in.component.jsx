import React, { Component } from 'react';
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = { 
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch(error) {
            console.log("Errored out while trying to sign in " + error.message)
        }        
        
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name] : value })
    }
    render() {
        return (
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in using email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput name = "email" type = "email" label = "email" handleChange = {this.handleChange} value = {this.state.email} required />
                    <FormInput name = "password" type = "password" label = "password" handleChange = {this.handleChange} value = {this.state.password} required />
                    <div className = "buttons">
                        <CustomButton type = "submit">Sign In</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>        
        );
    }
}

export default SignIn;