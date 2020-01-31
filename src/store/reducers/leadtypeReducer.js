import * as leadTypeConstants from '../constants/leadTypeConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  leadTypeList: null,
  leadtypeData: null,
}

const leadtypeAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const leadtypeAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const leadtypeAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const leadtypeListStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const leadtypeListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    leadTypeList: action.leadTypeList
  })
}

const leadtypeListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    leadTypeList: []
  })
}

const leadtypeFetchEditDataStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const leadtypeFetchEditDataSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    leadTypeData: action.leadTypeData
  })
}

const leadtypeFetchEditDataFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const leadtypeEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const leadtypeEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const leadtypeEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const leadtypeDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const leadtypeDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const leadtypeDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}



const leadtypeFetchFromCategoryStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const leadtypeFetchFromCategorySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    leadTypeList: action.response
  })
}

const leadtypeFetchFromCategoryFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}



const leadtypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case leadTypeConstants.LEADTYPE_ADD_START: return leadtypeAddStart(state, action);
    case leadTypeConstants.LEADTYPE_ADD_SUCCESS: return leadtypeAddSuccess(state, action);
    case leadTypeConstants.LEADTYPE_ADD_FAIL: return leadtypeAddFail(state, action);
    case leadTypeConstants.LEADTYPE_LIST_START: return leadtypeListStart(state, action);
    case leadTypeConstants.LEADTYPE_LIST_SUCCESS: return leadtypeListSuccess(state, action);
    case leadTypeConstants.LEADTYPE_LIST_FAIL: return leadtypeListFail(state, action);
    case leadTypeConstants.LEADTYPE_FETCH_EDITDATA_START: return leadtypeFetchEditDataStart(state, action);
    case leadTypeConstants.LEADTYPE_FETCH_EDITDATA_SUCCESS: return leadtypeFetchEditDataSuccess(state, action);
    case leadTypeConstants.LEADTYPE_FETCH_EDITDATA_FAIL: return leadtypeFetchEditDataFail(state, action);
    case leadTypeConstants.LEADTYPE_EDIT_START: return leadtypeEditStart(state, action);
    case leadTypeConstants.LEADTYPE_EDIT_SUCCESS: return leadtypeEditSuccess(state, action);
    case leadTypeConstants.LEADTYPE_EDIT_FAIL: return leadtypeEditFail(state, action);
    case leadTypeConstants.LEADTYPE_DELETE_START: return leadtypeDeleteStart(state, action);
    case leadTypeConstants.LEADTYPE_DELETE_SUCCESS: return leadtypeDeleteSuccess(state, action);
    case leadTypeConstants.LEADTYPE_DELETE_FAIL: return leadtypeDeleteFail(state, action);
    case leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_START: return leadtypeFetchFromCategoryStart(state, action);
    case leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_SUCCESS: return leadtypeFetchFromCategorySuccess(state, action);
    case leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_FAIL: return leadtypeFetchFromCategoryFail(state, action);
    case leadTypeConstants.LEADTYPE_RESET: return initialState;
    default: return state;
  }
}

export default leadtypeReducer;