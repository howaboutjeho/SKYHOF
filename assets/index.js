import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/component/App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import css from './style.css'


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app'));