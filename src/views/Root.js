import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from '../templates/MainTemplate';
import ContactView from './ContactView';
import FilesView from './FilesView';
import SaldoView from './SaldoView';
import LoginView from './LoginView';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from '../components/PrivateRoute';
import store from '../store';
import firebase from '../firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

firebase.firestore();
const rrfConfig = {
  userProfile: 'payments',
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const Root = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <MainTemplate>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={SaldoView} />
              <Route exact path="/login" component={LoginView} />
              <PrivateRoute exact path="/files" component={FilesView} />
              <PrivateRoute exact path="/contact" component={ContactView} />
            </Switch>
          </AuthProvider>
        </MainTemplate>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default Root;
