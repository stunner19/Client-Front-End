import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            auth : Auth,
            form : formReducer
        }),
        { 
            auth : { authenticated : localStorage.getItem('token') } 
        },
        applyMiddleware(thunk,logger)
    );

    return store;
}