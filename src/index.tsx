import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { HashRouter as Router } from "react-router-dom";

import store from "store/store";
import 'assets/styles/index.css';
import App from './App';
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/carsharing-app'>
      <Suspense fallback="Loading...">
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);