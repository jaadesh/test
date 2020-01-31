import * as productConstants from '../constants/productConstants';

export const productListStart = () => {
  return {
    type: productConstants.PRODUCT_LIST_START,
  }
}

export const productListSuccess = (productList) => {
  return {
    type: productConstants.PRODUCT_LIST_SUCCESS,
    productList: productList,
  }
}

export const productListFail = (error) => {
  return {
    type: productConstants.PRODUCT_LIST_FAIL,
    error: error,
  }
}


export const productAddStart = (formdata) => {
  return {
    type: productConstants.PRODUCT_ADD_START,
    formdata: formdata,
  }
}

export const productAddSuccess = (response) => {
  return {
    type: productConstants.PRODUCT_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const productAddFail = (error) => {
  return {
    type: productConstants.PRODUCT_ADD_FAIL,
    error: error,
  }
}

export const productFetchEditStart = (id) => {
  return {
    type: productConstants.PRODUCT_FETCH_EDIT_START,
    id: id,
  }
}

export const productFetchEditSuccess = (productData) => {
  return {
    type: productConstants.PRODUCT_FETCH_EDIT_SUCCESS,
    productData: productData,
  }
}

export const productFetchEditFail = (error) => {
  return {
    type: productConstants.PRODUCT_LIST_FAIL,
    error: error,
  }
}

export const productEditStart = (formdata) => {
  return {
    type: productConstants.PRODUCT_EDIT_START,
    formdata: formdata,
  }
}

export const productEditSuccess = (response) => {
  return {
    type: productConstants.PRODUCT_EDIT_SUCCESS,
    response: response,
  }
}

export const productEditFail = (error) => {
  return {
    type: productConstants.PRODUCT_EDIT_FAIL,
    error: error,
  }
}

export const productDeleteStart = (id) => {
  return {
    type: productConstants.PRODUCT_DELETE_START,
    id: id,
  }
}

export const productDeleteSuccess = (response) => {
  return {
    type: productConstants.PRODUCT_DELETE_SUCCESS,
    response: response,
  }
}

export const productDeleteFail = (error) => {
  return {
    type: productConstants.PRODUCT_DELETE_FAIL,
    error: error,
  }
}

export const productRemoveImageStart = (pId,path,formdata) => {
  return {
    type: productConstants.PRODUCT_REMOVE_IMAGE_START,
    pId: pId,
    path:path,
    formdata:formdata
  }
}

export const productRemoveImageSuccess = (response) => {
  return {
    type: productConstants.PRODUCT_REMOVE_IMAGE_SUCCESS,
    response: response,
  }
}

export const productRemoveImageFail = (error) => {
  return {
    type: productConstants.PRODUCT_REMOVE_IMAGE_FAIL,
    error: error,
  }
}


export const productImageRefreshStart = (path,formdata) => {
  return {
    type: productConstants.PRODUCT_IMAGE_REFRESH_START,
    path: path,
    formdata:formdata
  }
}



export const productReset = () => {
  return {
    type: productConstants.PRODUCT_RESET,
  }
}
