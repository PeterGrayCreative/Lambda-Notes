import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/combineReducers';
import { reduxFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const firebaseConfig = {
  apiKey: 'AIzaSyA104CqlQnoaXIEBnUCCAr_icslhxny06Y',
  authDomain: 'lambda-notes-connect.firebaseapp.com',
  databaseURL: 'https://lambda-notes-connect.firebaseio.com',
};

const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: true, // enable/disable Firebase's database logging
};

firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  compose(reactReduxFirebase(firebase, config), applyMiddleware(logger, thunk),  window.devToolsExtension && window.devToolsExtension())
);

export default store;