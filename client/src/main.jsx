import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from "react-redux";
import store from "./reducer/store"

const main = () => {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <App />
      </Provider>
  )
  );
};

export default main;