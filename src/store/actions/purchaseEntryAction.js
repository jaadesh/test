import * as purchaseEntryConstants from '../constants/purchaseEntryConstants';

export const purchaseEntryListStart = (level) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_LIST_START,
    level:level
  }
}

export const purchaseEntryListSuccess = (purchaseEntryList) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_LIST_SUCCESS,
    purchaseEntryList: purchaseEntryList,
  }
}

export const purchaseEntryListFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_LIST_FAIL,
    error: error,
  }
}


export const purchaseEntryAddStart = (formdata) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_ADD_START,
    formdata: formdata,
  }
}

export const purchaseEntryAddSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const purchaseEntryAddFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_ADD_FAIL,
    error: error,
  }
}

export const purchaseEntryFetchEditStart = (entryId,productId) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_START,
    entryId:entryId,
    productId:productId
  }
}

export const purchaseEntryFetchEditSuccess = (purchaseEntryData) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_SUCCESS,
    purchaseEntryData: purchaseEntryData,
  }
}

export const purchaseEntryFetchEditFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_FAIL,
    error: error,
  }
}

export const purchaseEntryEditStart = (formdata) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_EDIT_START,
    formdata: formdata,
  }
}

export const purchaseEntryEditSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_EDIT_SUCCESS,
    response: response,
  }
}

export const purchaseEntryEditFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_EDIT_FAIL,
    error: error,
  }
}

export const purchaseEntryDeleteStart = (id) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_DELETE_START,
    id: id,
  }
}

export const purchaseEntryDeleteSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_DELETE_SUCCESS,
    response: response,
  }
}

export const purchaseEntryDeleteFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_DELETE_FAIL,
    error: error,
  }
}


export const purchaseEntryProductListStart = (id) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_START,
    id: id,
  }
}

export const purchaseEntryProductListSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_SUCCESS,
    response: response,
  }
}

export const purchaseEntryProductListFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_FAIL,
    error: error,
  }
}



export const purchaseEntryPriceFetchStart = () => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_START,
  }
}

export const purchaseEntryPriceFetchSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_SUCCESS,
    response: response,
  }
}

export const purchaseEntryPriceFetchFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_FAIL,
    error: error,
  }
}


export const purchaseEntryChangeFinalStatusStart = (id) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_START,
    id: id,
  }
}

export const purchaseEntryChangeFinalStatusSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_SUCCESS,
    response: response,
  }
}

export const purchaseEntryChangeFinalStatusFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_FAIL,
    error: error,
  }
}


export const purchaseEntryMasterListFetchStart = () => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_START,
  }
}

export const purchaseEntryMasterListFetchSuccess = (response) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_SUCCESS,
    response: response,
  }
}

export const purchaseEntryMasterListFetchFail = (error) => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_FAIL,
    error: error,
  }
}


export const purchaseEntryReset = () => {
  return {
    type: purchaseEntryConstants.PURCHASE_ENTRY_RESET,
  }
}
