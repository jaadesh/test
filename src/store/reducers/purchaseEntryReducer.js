import * as purchaseEntryConstants from '../constants/purchaseEntryConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  purchaseEntryList: null,
  purchaseEntryProductList: null,
  purchaseEntryData: null,
  subcategorymaster: null,
  pricingDetails: null,
  masterList:null,
  FinalStatusChanged:false
}

const purchaseEntryListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    purchaseEntryList: null,
  })
}

const purchaseEntryListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    purchaseEntryList: action.purchaseEntryList,
  })
}

const purchaseEntryListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    purchaseEntryList: null,
  })
}



const purchaseEntryProductListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    purchaseEntryProductList: null,
  })
}

const purchaseEntryProductListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    purchaseEntryProductList: action.response,
  })
}

const purchaseEntryProductListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    purchaseEntryProductList: null,
  })
}



const purchaseEntryAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const purchaseEntryAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const purchaseEntryAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const purchaseEntryFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    purchaseEntryData: null,
  })
}

const purchaseEntryFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    purchaseEntryData: action.purchaseEntryData,
  })
}

const purchaseEntryFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    purchaseEntryData: null,
  })
}

const purchaseEntryEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const purchaseEntryEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const purchaseEntryEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const purchaseEntryDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const purchaseEntryDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const purchaseEntryDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}


const purchaseEntryPriceFetchStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const purchaseEntryPriceFetchSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    pricingDetails: action.response
  })
}

const purchaseEntryPriceFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}



const purchaseEntryChangeFinalStatusStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const purchaseEntryChangeFinalStatusSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    FinalStatusChanged: true,
    response: action.response
  })
}

const purchaseEntryChangeFinalStatusFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const purchaseEntryMasterListFetchStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const purchaseEntryMasterListFetchSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    masterList: action.response
  })
}

const purchaseEntryMasterListFetchFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}




const purchaseEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case purchaseEntryConstants.PURCHASE_ENTRY_LIST_START: return purchaseEntryListStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_LIST_SUCCESS: return purchaseEntryListSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_LIST_FAIL: return purchaseEntryListFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_ADD_START: return purchaseEntryAddStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_ADD_SUCCESS: return purchaseEntryAddSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_ADD_FAIL: return purchaseEntryAddFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_START: return purchaseEntryFetchEditStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_SUCCESS: return purchaseEntryFetchEditSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_FAIL: return purchaseEntryFetchEditFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_EDIT_START: return purchaseEntryEditStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_EDIT_SUCCESS: return purchaseEntryEditSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_EDIT_FAIL: return purchaseEntryEditFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_DELETE_START: return purchaseEntryDeleteStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_DELETE_SUCCESS: return purchaseEntryDeleteSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_DELETE_FAIL: return purchaseEntryDeleteFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_START: return purchaseEntryProductListStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_SUCCESS: return purchaseEntryProductListSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_FAIL: return purchaseEntryProductListFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_START: return purchaseEntryPriceFetchStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_SUCCESS: return purchaseEntryPriceFetchSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_FAIL: return purchaseEntryPriceFetchFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_START: return purchaseEntryMasterListFetchStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_SUCCESS: return purchaseEntryMasterListFetchSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_FAIL: return purchaseEntryMasterListFetchFail(state, action);

    case purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_START: return purchaseEntryChangeFinalStatusStart(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_SUCCESS: return purchaseEntryChangeFinalStatusSuccess(state, action);
    case purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_FAIL: return purchaseEntryChangeFinalStatusFail(state, action);
    
    case purchaseEntryConstants.PURCHASE_ENTRY_RESET: return initialState;
    
    default: return state;
  }
}

export default purchaseEntryReducer;