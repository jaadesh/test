import * as userConstants from '../constants/userConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  userList: null,
  userData: null,
  countryList: null,
  stateList: null
}

const userListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    userList: null,
  })
}

const userListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    userList: action.userList,
  })
}

const userListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    userList: null,
  })
}

const userAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const userAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const userAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const userFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const userFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    userData: action.userData,
  })
}

const userFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    userData: null,
  })
}

const userEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const userEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const userEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const userDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const userDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const userDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const getCountryStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    countryList: null,
  })
}

const getCountrySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    countryList: action.countryList,
  })
}

const getCountryFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    countryList: null,
  })
}

const getStateStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  })
}

const getStateSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    stateList: action.stateList,
  })
}

const getStateFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    stateList: null,
  })
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LIST_START: return userListStart(state, action);
    case userConstants.USER_LIST_SUCCESS: return userListSuccess(state, action);
    case userConstants.USER_LIST_FAIL: return userListFail(state, action);

    case userConstants.USER_ADD_START: return userAddStart(state, action);
    case userConstants.USER_ADD_SUCCESS: return userAddSuccess(state, action);
    case userConstants.USER_ADD_FAIL: return userAddFail(state, action);

    case userConstants.USER_FETCH_EDIT_START: return userFetchEditStart(state, action);
    case userConstants.USER_FETCH_EDIT_SUCCESS: return userFetchEditSuccess(state, action);
    case userConstants.USER_FETCH_EDIT_FAIL: return userFetchEditFail(state, action);

    case userConstants.USER_EDIT_START: return userEditStart(state, action);
    case userConstants.USER_EDIT_SUCCESS: return userEditSuccess(state, action);
    case userConstants.USER_EDIT_FAIL: return userEditFail(state, action);

    case userConstants.USER_DELETE_START: return userDeleteStart(state, action);
    case userConstants.USER_DELETE_SUCCESS: return userDeleteSuccess(state, action);
    case userConstants.USER_DELETE_FAIL: return userDeleteFail(state, action);

    case userConstants.GET_COUNTRY_START: return getCountryStart(state, action);
    case userConstants.GET_COUNTRY_SUCCESS: return getCountrySuccess(state, action);
    case userConstants.GET_COUNTRY_FAIL: return getCountryFail(state, action);

    case userConstants.GET_STATE_START: return getStateStart(state, action);
    case userConstants.GET_STATE_SUCCESS: return getStateSuccess(state, action);
    case userConstants.GET_STATE_FAIL: return getStateFail(state, action);

    case userConstants.USER_RESET: return initialState;

    default: return state;
  }
}

export default userReducer;