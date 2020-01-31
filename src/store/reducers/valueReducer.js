import * as valueConstants from '../constants/valueConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  valueList: null,
  valueData: null,
  subcategorymaster: null
}

const valueListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    valueList: null,
  })
}

const valueListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    valueList: action.valueList,
  })
}

const valueListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    valueList: null,
  })
}

const valueAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const valueAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const valueAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const valueFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const valueFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    valueData: action.valueData,

  })
}

const valueFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    valueData: null,
  })
}

const valueEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const valueEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const valueEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const valueDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const valueDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const valueDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}



const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case valueConstants.VALUE_LIST_START: return valueListStart(state, action);
    case valueConstants.VALUE_LIST_SUCCESS: return valueListSuccess(state, action);
    case valueConstants.VALUE_LIST_FAIL: return valueListFail(state, action);

    case valueConstants.VALUE_ADD_START: return valueAddStart(state, action);
    case valueConstants.VALUE_ADD_SUCCESS: return valueAddSuccess(state, action);
    case valueConstants.VALUE_ADD_FAIL: return valueAddFail(state, action);

    case valueConstants.VALUE_FETCH_EDIT_START: return valueFetchEditStart(state, action);
    case valueConstants.VALUE_FETCH_EDIT_SUCCESS: return valueFetchEditSuccess(state, action);
    case valueConstants.VALUE_FETCH_EDIT_FAIL: return valueFetchEditFail(state, action);

    case valueConstants.VALUE_EDIT_START: return valueEditStart(state, action);
    case valueConstants.VALUE_EDIT_SUCCESS: return valueEditSuccess(state, action);
    case valueConstants.VALUE_EDIT_FAIL: return valueEditFail(state, action);

    case valueConstants.VALUE_DELETE_START: return valueDeleteStart(state, action);
    case valueConstants.VALUE_DELETE_SUCCESS: return valueDeleteSuccess(state, action);
    case valueConstants.VALUE_DELETE_FAIL: return valueDeleteFail(state, action);

    case valueConstants.VALUE_RESET: return initialState;

    default: return state;
  }
}

export default valueReducer;