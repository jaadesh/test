import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './saga/rootSaga';
import setAuthHeader from './config/setAuthHeaders';
import * as authActions from './store/actions/authAction';
import { STORAGE_TOKEN } from './config/config';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);

const token = localStorage.getItem(STORAGE_TOKEN);
if (token) {
  setAuthHeader(token);
  store.dispatch(authActions.authSuccess(token));
}

const app = (
  <Provider store={store} >
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('admin'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
