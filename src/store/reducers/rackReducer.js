import * as rackConstants from '../constants/rackConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  rackList: null,
  rackData: null
}

const rackListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    rackList: null,
  })
}

const rackListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    rackList: action.rackList,
  })
}

const rackListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    rackList: null,
  })
}

const rackAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const rackAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const rackAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const rackFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const rackFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    rackData: action.rackData,

  })
}

const rackFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    rackData: null,
  })
}

const rackEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const rackEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const rackEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const rackDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const rackDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const rackDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}



const rackReducer = (state = initialState, action) => {
  switch (action.type) {
    case rackConstants.RACK_LIST_START: return rackListStart(state, action);
    case rackConstants.RACK_LIST_SUCCESS: return rackListSuccess(state, action);
    case rackConstants.RACK_LIST_FAIL: return rackListFail(state, action);

    case rackConstants.RACK_ADD_START: return rackAddStart(state, action);
    case rackConstants.RACK_ADD_SUCCESS: return rackAddSuccess(state, action);
    case rackConstants.RACK_ADD_FAIL: return rackAddFail(state, action);

    case rackConstants.RACK_FETCH_EDIT_START: return rackFetchEditStart(state, action);
    case rackConstants.RACK_FETCH_EDIT_SUCCESS: return rackFetchEditSuccess(state, action);
    case rackConstants.RACK_FETCH_EDIT_FAIL: return rackFetchEditFail(state, action);

    case rackConstants.RACK_EDIT_START: return rackEditStart(state, action);
    case rackConstants.RACK_EDIT_SUCCESS: return rackEditSuccess(state, action);
    case rackConstants.RACK_EDIT_FAIL: return rackEditFail(state, action);

    case rackConstants.RACK_DELETE_START: return rackDeleteStart(state, action);
    case rackConstants.RACK_DELETE_SUCCESS: return rackDeleteSuccess(state, action);
    case rackConstants.RACK_DELETE_FAIL: return rackDeleteFail(state, action);

    case rackConstants.RACK_RESET: return initialState;

    default: return state;
  }
}

export default rackReducer;