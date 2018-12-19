import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/app';

import * as serviceWorker from './serviceWorker';

const render = ( Component ) => {
    ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
        document.getElementById('root'),
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
};

render(App);