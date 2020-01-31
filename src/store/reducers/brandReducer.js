import * as brandConstants from '../constants/brandConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  loader: false,
  error:null,
  response:null,
  brandData:null
}

export const addBrandStart = (state, action) => {
  return updateObject(state, {
    error:false,
    loader: true
  })
}

export const addBrandSuccess = (state, action) => {
  return updateObject(state, {
    error:false,
    loader: false,
    response:action.response
  })
}

export const addBrandFail = (state, action) => {
  return updateObject(state, {
    loader: false,
    error:action.error
  })
}

const getBrandStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const getBrandSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    brandData: action.brandList
  })
}

const getBrandFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const brandFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const brandFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    brandData: action.brandData,

  })
}

const brandFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    brandData: null,
  })
}

const brandEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const brandEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const brandEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}


const deleteBrandStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true, id : action.id
  });
}

const deleteBrandSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.msg
  })
}

const deleteBrandFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}


const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case brandConstants.ADD_BRAND_START: return addBrandStart(state, action);
    case brandConstants.ADD_BRAND_SUCCESS: return addBrandSuccess(state, action);
    case brandConstants.ADD_BRAND_FAIL: return addBrandFail(state, action);
    case brandConstants.GET_BRAND_START: return getBrandStart(state, action);
    case brandConstants.GET_BRAND_SUCCESS: return getBrandSuccess(state, action);
    case brandConstants.GET_BRAND_FAIL: return getBrandFail(state, action);
    case brandConstants.BRAND_FETCH_EDIT_START: return brandFetchEditStart(state, action);
    case brandConstants.BRAND_FETCH_EDIT_SUCCESS: return brandFetchEditSuccess(state, action);
    case brandConstants.BRAND_FETCH_EDIT_FAIL: return brandFetchEditFail(state, action);
    case brandConstants.BRAND_EDIT_START: return brandEditStart(state, action);
    case brandConstants.BRAND_EDIT_SUCCESS: return brandEditSuccess(state, action);
    case brandConstants.BRAND_EDIT_FAIL: return brandEditFail(state, action);
    case brandConstants.DELETE_BRAND_START: return deleteBrandStart(state, action);
    case brandConstants.DELETE_BRAND_SUCCESS: return deleteBrandSuccess(state, action);
    case brandConstants.DELETE_BRAND_FAIL: return deleteBrandFail(state, action);
    case brandConstants.BRAND_RESET: return initialState;
    default: return state;
  }
}

export default brandReducer;