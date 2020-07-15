import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    // <React.StrictMode>
  <App />
  // </React.StrictMode>
  , rootElement);
} else {
  ReactDOM.render(
    // <React.StrictMode>
  <App />
  // </React.StrictMode>
  , rootElement);
}
serviceWorker.register();
