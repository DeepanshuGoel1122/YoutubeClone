import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux';

import './_base.scss';
import 'react-lazy-load-image-component/src/effects/blur.css'

import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </Provider>
);