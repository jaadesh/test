import * as menuConstants from '../constants/menuConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  menu: null,
}

const fetchMenuStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true, menu: null,
  });
}

const fetchMenuSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    menu: action.menu
  })
}

const fetchMenuFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case menuConstants.FETCH_MENU_START: return fetchMenuStart(state, action);
    case menuConstants.FETCH_MENU_SUCCESS: return fetchMenuSuccess(state, action);
    case menuConstants.FETCH_MENU_FAIL: return fetchMenuFail(state, action);
    default: return state;
  }
}

export default menuReducer;