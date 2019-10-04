import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignIn extends Component {

    constructor(props){
        super(props);
    }

    onSubmit = (formProps) => {
        this.props.signIn(formProps.email,formProps.password, () => {
            this.props.history.push('/features');
        });
    };

    render(){

        const { handleSubmit } = this.props;
        return(
            <form onSubmit = {handleSubmit(this.onSubmit)} >
                <fieldset>
                    <label>Email</label>
                    <Field 
                        name = "email"
                        type = "text"
                        component = "input"
                        autocomplete = "none"
                        />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                        name = "password"
                        type = "password"
                        component = "input"
                        autocomplete = "none"
                        />
                </fieldset>
                {this.props.errorMessage}
                <button>Sign In!</button>
            </form>
        );
    }
}

export default reduxForm({ form : 'signin' })(SignIn);  // form is named as signup.