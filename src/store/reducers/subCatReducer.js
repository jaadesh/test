import * as subCatConstants from '../constants/subCatConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  subcatlist: null,
  subcatData: null,
}

const subcatListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    subcatlist: null,
  })
}

const subcatListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    subcatlist: action.subcatlist,
  })
}

const subcatListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    subcatlist: [],
  })
}

const addSubcatStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const addSubcatSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const addSubcatFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const subcatFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const subcatFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    subcatData: action.subcatData,

  })
}

const subcatFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    subcatData: null,
  })
}

const subcatEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const subcatEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const subcatEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const subcatDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const subcatDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const subcatDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const subCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case subCatConstants.SUBCAT_LIST_START: return subcatListStart(state, action);
    case subCatConstants.SUBCAT_LIST_SUCCESS: return subcatListSuccess(state, action);
    case subCatConstants.SUBCAT_LIST_FAIL: return subcatListFail(state, action);
    case subCatConstants.ADD_SUBCAT_START: return addSubcatStart(state, action);
    case subCatConstants.ADD_SUBCAT_SUCCESS: return addSubcatSuccess(state, action);
    case subCatConstants.ADD_SUBCAT_FAIL: return addSubcatFail(state, action);
    case subCatConstants.SUBCAT_FETCH_EDIT_START: return subcatFetchEditStart(state, action);
    case subCatConstants.SUBCAT_FETCH_EDIT_SUCCESS: return subcatFetchEditSuccess(state, action);
    case subCatConstants.SUBCAT_FETCH_EDIT_FAIL: return subcatFetchEditFail(state, action);
    case subCatConstants.SUBCAT_EDIT_START: return subcatEditStart(state, action);
    case subCatConstants.SUBCAT_EDIT_SUCCESS: return subcatEditSuccess(state, action);
    case subCatConstants.SUBCAT_EDIT_FAIL: return subcatEditFail(state, action);
    case subCatConstants.SUBCAT_DELETE_START: return subcatDeleteStart(state, action);
    case subCatConstants.SUBCAT_DELETE_SUCCESS: return subcatDeleteSuccess(state, action);
    case subCatConstants.SUBCAT_DELETE_FAIL: return subcatDeleteFail(state, action);
    case subCatConstants.SUBCAT_RESET: return initialState;
    default: return state;
  }
}

export default subCatReducer;