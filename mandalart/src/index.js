import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import text from './store/modules/text.js';

import Root from "./client/Root.js";
import * as serviceWorker from "./serviceWorker";

const store = createStore(text);
console.log(store.getState())

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();