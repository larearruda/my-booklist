import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/store';

import {Provider} from 'react-redux';
import './index.css';
import HomePage from './pages/HomePage/HomePage';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);