import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const signUpUser = (response) => ({
    type : ActionTypes.AUTH_USER,
    payload : response
});

export const signUpFailed = (response) => ({
    type : ActionTypes.AUTH_ERROR,
    payload : response
});

export const signUp = (email,password,callback) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:3000/users/signup', {
            email : email,
            password : password
        });
        dispatch(signUpUser(response.data.token));
        // to persist the state.
        localStorage.setItem('token',response.data.token);
        callback();
    }catch(e){
        const response = 'Email is in use.'
        console.log("failure",e);
        dispatch(signUpFailed(response));
    }
};

export const signOut = () => { 
    localStorage.removeItem('token');
    return {
        type : ActionTypes.AUTH_USER,
        payload : ''
    }
};