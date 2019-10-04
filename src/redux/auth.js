import * as ActionTypes from './actionTypes';

const initialState = {
    authenticated : '',
    errorMessage : ''
}

export const Auth = (state = initialState, action) => {
    switch(action.type){

        case ActionTypes.AUTH_USER :
            return {...state, authenticated : action.payload, errorMessage : '' };
        
        case ActionTypes.AUTH_ERROR :
            return {...state, errorMessage : action.payload };
        default :
            return state;
    }
};