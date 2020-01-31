import * as authConstants from '../constants/authConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  token: null,
  name: null,
}

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    name: action.name,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
}

const logoutStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const logoutSuccess = (state, action) => {
  return updateObject(state, {
    token: null,
    name: null,
    error: null,
    loading: false,
  })
}

const logoutFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    token: null,
    name: null,
  })
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.AUTH_START: return authStart(state, action);
    case authConstants.AUTH_SUCCESS: return authSuccess(state, action);
    case authConstants.AUTH_FAIL: return authFail(state, action);
    case authConstants.LOGOUT_START: return logoutStart(state, action);
    case authConstants.LOGOUT_SUCCESS: return logoutSuccess(state, action);
    case authConstants.LOGOUT_FAIL: return logoutFail(state, action);
    default: return state;
  }
}

export default authReducer;