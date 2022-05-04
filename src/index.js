import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/app/App';

import './style/style.scss';

//const root = createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);