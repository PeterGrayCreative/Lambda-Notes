import React from 'react';
import ReactDOM from 'react-dom';
import { reduxFirebase } from 'react-redux-firebase'
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
WebFont.load({
  google: {
    families: ['Raleway:400', 'Roboto:700', 'sans-serif']
  }
});