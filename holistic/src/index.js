import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import testText from "./reducers/testText.js";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore(testText);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
