import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Link, Route} from 'react-router-dom';
import './index.css';// because of webpack , we can import css file as well
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <BrowserRouter>
     <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
