import { call, put, takeLatest } from 'redux-saga/effects';

import * as authConstants from '../store/constants/authConstants';
import * as authActions from '../store/actions/authAction';
import * as authService from '../service/authService';
import setAuthHeader from '../config/setAuthHeaders';
import { CATCH_ERROR, STORAGE_NAME, STORAGE_TOKEN } from '../config/config';

export function* UserLoginSaga(action) {
  try {
    const response = yield call(authService.UserLogin, action.formdata);
    const token = response.data.data.user.token;
    const name = response.data.data.user.name;
    localStorage.setItem(STORAGE_TOKEN, token);
    localStorage.setItem(STORAGE_NAME, name);
    setAuthHeader(token);
    yield put(authActions.authSuccess(token, name));
  }
  catch (error) {
    if (error.response) {
      yield put(authActions.authFail(error.response.data.msg));
    }
    else {
      yield put(authActions.authFail(CATCH_ERROR));
    }
  }
}

export function* UserLogoutSaga(action) {
  if (action.token) {
    try {
      yield call(authService.UserLogout, action.token);
      yield put(authActions.logoutSuccess());
    }
    catch (error) {
      if (error.response) {
        yield put(authActions.authFail(error.response.data.msg));
      }
      else {
        window.location.reload();
        yield put(authActions.authFail(CATCH_ERROR));
      }
    }
  }
  setAuthHeader(null);
  localStorage.removeItem(STORAGE_TOKEN);
  localStorage.removeItem(STORAGE_NAME);
}

export function* authFlowWatcher() {
  yield takeLatest(authConstants.AUTH_START, UserLoginSaga);
  yield takeLatest(authConstants.LOGOUT_START, UserLogoutSaga);
}