import * as quotationConstants from '../constants/quotationConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  quotationList: null,
  quotationData: null,
  userData: null,
  availableProducts:null,
  insideProductData:[],
}

const quotationListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    quotationList: null,
  })
}

const quotationListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    quotationList: action.quotationList,
  })
}

const quotationListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    quotationList: null,
  })
}

const quotationAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const quotationAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const quotationAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const quotationFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const quotationFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    quotationData: action.quotationData,
  })
}

const quotationFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    quotationData: null,
  })
}

const quotationEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const quotationEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const quotationEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const quotationDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const quotationDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const quotationDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const getUserDetailsFromMobileStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const getUserDetailsFromMobileSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    userData: action.userData
  })
}

const getUserDetailsFromMobileFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  })
}


const searchProductStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const searchProductSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    availableProducts : action.availableProducts.productDetails ? action.availableProducts.productDetails : null
  })
}

const searchProductFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const getInsidePackingStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const getInsidePackingSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    insideProductData : action.insideProductData  ? action.insideProductData : []
  })
}

const getInsidePackingFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    insideProductData:[]
  })
}



const quotationReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotationConstants.QUOTATION_LIST_START: return quotationListStart(state, action);
    case quotationConstants.QUOTATION_LIST_SUCCESS: return quotationListSuccess(state, action);
    case quotationConstants.QUOTATION_LIST_FAIL: return quotationListFail(state, action);

    case quotationConstants.QUOTATION_ADD_START: return quotationAddStart(state, action);
    case quotationConstants.QUOTATION_ADD_SUCCESS: return quotationAddSuccess(state, action);
    case quotationConstants.QUOTATION_ADD_FAIL: return quotationAddFail(state, action);

    case quotationConstants.QUOTATION_FETCH_EDIT_START: return quotationFetchEditStart(state, action);
    case quotationConstants.QUOTATION_FETCH_EDIT_SUCCESS: return quotationFetchEditSuccess(state, action);
    case quotationConstants.QUOTATION_FETCH_EDIT_FAIL: return quotationFetchEditFail(state, action);

    case quotationConstants.QUOTATION_EDIT_START: return quotationEditStart(state, action);
    case quotationConstants.QUOTATION_EDIT_SUCCESS: return quotationEditSuccess(state, action);
    case quotationConstants.QUOTATION_EDIT_FAIL: return quotationEditFail(state, action);

    case quotationConstants.QUOTATION_DELETE_START: return quotationDeleteStart(state, action);
    case quotationConstants.QUOTATION_DELETE_SUCCESS: return quotationDeleteSuccess(state, action);
    case quotationConstants.QUOTATION_DELETE_FAIL: return quotationDeleteFail(state, action);

    case quotationConstants.GET_USER_DETAILS_FROM_MOBILE_START: return getUserDetailsFromMobileStart(state, action);
    case quotationConstants.GET_USER_DETAILS_FROM_MOBILE_SUCCESS: return getUserDetailsFromMobileSuccess(state, action);
    case quotationConstants.GET_USER_DETAILS_FROM_MOBILE_FAIL: return getUserDetailsFromMobileFail(state, action);

    case quotationConstants.SEARCH_PRODUCT_START: return searchProductStart(state, action);
    case quotationConstants.SEARCH_PRODUCT_SUCCESS: return searchProductSuccess(state, action);
    case quotationConstants.SEARCH_PRODUCT_FAIL: return searchProductFail(state, action);

    case quotationConstants.GET_INSIDE_PACKING_START: return getInsidePackingStart(state, action);
    case quotationConstants.GET_INSIDE_PACKING_SUCCESS: return getInsidePackingSuccess(state, action);
    case quotationConstants.GET_INSIDE_PACKING_FAIL: return getInsidePackingFail(state, action);

    case quotationConstants.QUOTATION_RESET: return initialState;

    default: return state;
  }
}

export default quotationReducer;