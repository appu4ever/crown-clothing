import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'

class SignUp extends React.Component {

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state
        
        if (password !== confirmPassword) {
            alert("Passwords dont match !!")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await user.updateProfile({displayName})
            await createUserProfileDocument(user)
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log("Error while trying to create new user " + error.message)
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name] : value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className = "sign-up">
                <h2 className = "title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className = "sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput type = "text" name = "displayName" value = {displayName} 
                        label = "Display name" onChange = {this.handleChange} required/>
                    <FormInput type = "email" name = "email" value = {email} 
                        label = "Email" onChange = {this.handleChange} required/>
                    <FormInput type = "password" name = "password" value = {password} 
                        label = "Password" onChange = {this.handleChange} required/>
                    <FormInput type = "password" name = "confirmPassword" value = {confirmPassword} 
                        label = "Confirm Password" onChange = {this.handleChange} required/>
                    <CustomButton type= "submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp