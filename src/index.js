import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/icons/icons.css';
import App from './components/App';

//Redux 
import { createStore , applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import reduxThunk from 'redux-thunk';

const store = createStore(
    reducers, //Aqui van los Reducers 
    {}, //Estado Inicial
    applyMiddleware(reduxThunk),
)


ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>

    , document.getElementById('root'));