import * as authConstants from '../constants/authConstants';

export const authStart = (formdata) => {
  return {
    type: authConstants.AUTH_START,
    formdata: formdata
  }
}

export const authSuccess = (token, name) => {
  return {
    type: authConstants.AUTH_SUCCESS,
    token: token,
    name: name,
  }
}

export const authFail = (error) => {
  return {
    type: authConstants.AUTH_FAIL,
    error: error
  }
}

export const logoutStart = (token) => {
  return {
    type: authConstants.LOGOUT_START,
    token: token,
  }
}

export const logoutSuccess = () => {
  return {
    type: authConstants.LOGOUT_SUCCESS,
  }
}

export const logoutFail = (error) => {
  return {
    type: authConstants.LOGOUT_FAIL,
    error: error
  }
}