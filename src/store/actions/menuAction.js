import * as menuConstants from '../constants/menuConstants';

export const fetchMenuStart = () => {
  return {
    type: menuConstants.FETCH_MENU_START,
  }
}

export const fetchMenuSuccess = (menuArray) => {
  return {
    type: menuConstants.FETCH_MENU_SUCCESS,
    menu: menuArray
  }
}

export const fetchMenuFail = (error) => {
  return {
    type: menuConstants.FETCH_MENU_FAIL,
    error: error
  }
}