import authReducer from './authReducer';
import paymentsReducer from './paymentsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  payments: paymentsReducer,
  firebaseReducer,
  firestoreReducer,
});

export default rootReducer;
