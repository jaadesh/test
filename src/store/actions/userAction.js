import * as userConstants from '../constants/userConstants';

export const userListStart = () => {
  return {
    type: userConstants.USER_LIST_START,
  }
}

export const userListSuccess = (userList) => {
  return {
    type: userConstants.USER_LIST_SUCCESS,
    userList: userList,
  }
}

export const userListFail = (error) => {
  return {
    type: userConstants.USER_LIST_FAIL,
    error: error,
  }
}


export const userAddStart = (formdata) => {
  return {
    type: userConstants.USER_ADD_START,
    formdata: formdata,
  }
}

export const userAddSuccess = (response) => {
  return {
    type: userConstants.USER_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const userAddFail = (error) => {
  return {
    type: userConstants.USER_ADD_FAIL,
    error: error,
  }
}

export const userFetchEditStart = (id) => {
  return {
    type: userConstants.USER_FETCH_EDIT_START,
    id: id,
  }
}

export const userFetchEditSuccess = (userData) => {
  return {
    type: userConstants.USER_FETCH_EDIT_SUCCESS,
    userData: userData,
  }
}

export const userFetchEditFail = (error) => {
  return {
    type: userConstants.USER_LIST_FAIL,
    error: error,
  }
}

export const userEditStart = (formdata) => {
  return {
    type: userConstants.USER_EDIT_START,
    formdata: formdata,
  }
}

export const userEditSuccess = (response) => {
  return {
    type: userConstants.USER_EDIT_SUCCESS,
    response: response,
  }
}

export const userEditFail = (error) => {
  return {
    type: userConstants.USER_EDIT_FAIL,
    error: error,
  }
}

export const userDeleteStart = (id) => {
  return {
    type: userConstants.USER_DELETE_START,
    id: id,
  }
}

export const userDeleteSuccess = (response) => {
  return {
    type: userConstants.USER_DELETE_SUCCESS,
    response: response,
  }
}

export const userDeleteFail = (error) => {
  return {
    type: userConstants.USER_DELETE_FAIL,
    error: error,
  }
}

export const getCountryStart = (id) => {
  return {
    type: userConstants.GET_COUNTRY_START,
    id: id,
  }
}

export const getCountrySuccess = (response) => {
  return {
    type: userConstants.GET_COUNTRY_SUCCESS,
    countryList: response,
  }
}

export const getCountryFail = (error) => {
  return {
    type: userConstants.GET_COUNTRY_FAIL,
    error: error,
  }
}

export const getStateStart = (id) => {
  return {
    type: userConstants.GET_STATE_START,
    id: id,
  }
}

export const getStateSuccess = (response) => {
  return {
    type: userConstants.GET_STATE_SUCCESS,
    stateList: response,
  }
}

export const getStateFail = (error) => {
  return {
    type: userConstants.GET_STATE_FAIL,
    error: error,
  }
}

export const userReset = () => {
  return {
    type: userConstants.USER_RESET,
  }
}
