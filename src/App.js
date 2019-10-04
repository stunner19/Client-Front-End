import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();

export default () => {
    return(
        <Provider store = {store}>
            <BrowserRouter>
                <Main />                
            </BrowserRouter>
        </Provider>
    );
}