import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { noteReducer } from './reducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  noteReducer,
});

export default rootReducer;
