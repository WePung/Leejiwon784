import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import rootReducer from './action/reducers';
import {composeWithDevTools} from "redux-devtools-extension";

import App from './App';
import reportWebVitals from './reportWebVitals';


const enhancer = process.env.NODE_ENV === "production"
? compose(applyMiddleware())
: composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();