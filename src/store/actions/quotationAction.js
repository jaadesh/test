import * as quotationConstants from '../constants/quotationConstants';

export const quotationListStart = () => {
  return {
    type: quotationConstants.QUOTATION_LIST_START,
  }
}

export const quotationListSuccess = (quotationList) => {
  return {
    type: quotationConstants.QUOTATION_LIST_SUCCESS,
    quotationList: quotationList,
  }
}

export const quotationListFail = (error) => {
  return {
    type: quotationConstants.QUOTATION_LIST_FAIL,
    error: error,
  }
}


export const quotationAddStart = (formdata) => {
  return {
    type: quotationConstants.QUOTATION_ADD_START,
    formdata: formdata,
  }
}

export const quotationAddSuccess = (response) => {
  return {
    type: quotationConstants.QUOTATION_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const quotationAddFail = (error) => {
  return {
    type: quotationConstants.QUOTATION_ADD_FAIL,
    error: error,
  }
}

export const quotationFetchEditStart = (id) => {
  return {
    type: quotationConstants.QUOTATION_FETCH_EDIT_START,
    id: id,
  }
}

export const quotationFetchEditSuccess = (quotationData) => {
  return {
    type: quotationConstants.QUOTATION_FETCH_EDIT_SUCCESS,
    quotationData: quotationData,
  }
}

export const quotationFetchEditFail = (error) => {
  return {
    type: quotationConstants.QUOTATION_LIST_FAIL,
    error: error,
  }
}

export const quotationEditStart = (formdata) => {
  return {
    type: quotationConstants.QUOTATION_EDIT_START,
    formdata: formdata,
  }
}

export const quotationEditSuccess = (response) => {
  return {
    type: quotationConstants.QUOTATION_EDIT_SUCCESS,
    response: response,
  }
}

export const quotationEditFail = (error) => {
  return {
    type: quotationConstants.QUOTATION_EDIT_FAIL,
    error: error,
  }
}

export const quotationDeleteStart = (id) => {
  return {
    type: quotationConstants.QUOTATION_DELETE_START,
    id: id,
  }
}

export const quotationDeleteSuccess = (response) => {
  return {
    type: quotationConstants.QUOTATION_DELETE_SUCCESS,
    response: response,
  }
}

export const quotationDeleteFail = (error) => {
  return {
    type: quotationConstants.QUOTATION_DELETE_FAIL,
    error: error,
  }
}


export const getUserDetailsFromMobileStart = (mobile) => {
  return {
    type: quotationConstants.GET_USER_DETAILS_FROM_MOBILE_START,
    mobile: mobile
  }
}

export const getUserDetailsFromMobileSuccess = (response) => {
  return {
    type: quotationConstants.GET_USER_DETAILS_FROM_MOBILE_SUCCESS,
    userData: response.userDetails,
  }
}

export const getUserDetailsFromMobileFail = (error) => {
  return {
    type: quotationConstants.GET_USER_DETAILS_FROM_MOBILE_FAIL,
    error: error,
  }
}

export const searchProductStart = (formdata) => {
  return {
    type: quotationConstants.SEARCH_PRODUCT_START,
    formdata: formdata
  }
}

export const searchProductSuccess = (response) => {
  return {
    type: quotationConstants.SEARCH_PRODUCT_SUCCESS,
    availableProducts: response,
  }
}

export const searchProductFail = (error) => {
  return {
    type: quotationConstants.SEARCH_PRODUCT_FAIL,
    error: error,
  }
}



export const getInsidePackingStart = (id) => {
  return {
    type: quotationConstants.GET_INSIDE_PACKING_START,
    id: id
  }
}

export const getInsidePackingSuccess = (response) => {
  return {
    type: quotationConstants.GET_INSIDE_PACKING_SUCCESS,
    insideProductData: response,
  }
}

export const getInsidePackingFail = (error) => {
  return {
    type: quotationConstants.GET_INSIDE_PACKING_FAIL,
    error: error,
  }
}


export const quotationReset = () => {
  return {
    type: quotationConstants.QUOTATION_RESET,
  }
}
