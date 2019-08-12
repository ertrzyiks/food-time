import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

const read = (key) => JSON.parse(window.localStorage.getItem(key))
const write = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

ReactDOM.render(<App storage={{read, write}}/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
