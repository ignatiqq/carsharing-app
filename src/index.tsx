import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom";

import 'assets/styles/index.css';
import App from './App';
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);