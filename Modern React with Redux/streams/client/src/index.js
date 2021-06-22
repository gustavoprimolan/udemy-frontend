import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reducers from "./reducers";


console.log(window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__);
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
