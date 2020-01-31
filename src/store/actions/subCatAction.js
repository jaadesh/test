import * as subCatConstants from '../constants/subCatConstants';

export const subcatListStart = () => {
  return {
    type: subCatConstants.SUBCAT_LIST_START,
  }
}

export const subcatListSuccess = (subcatlist) => {
  return {
    type: subCatConstants.SUBCAT_LIST_SUCCESS,
    subcatlist: subcatlist,
  }
}

export const subcatListFail = (error) => {
  return {
    type: subCatConstants.SUBCAT_LIST_FAIL,
    error: error,
  }
}

export const addSubcatStart = (formdata) => {
  return {
    type: subCatConstants.ADD_SUBCAT_START,
    formdata: formdata,
  }
}

export const addSubcatSuccess = (response) => {
  return {
    type: subCatConstants.ADD_SUBCAT_SUCCESS,
    response: response,
  }
}

export const addSubcatFail = (error) => {
  return {
    type: subCatConstants.ADD_SUBCAT_FAIL,
    error: error,
  }
}

export const subcatFetchEditStart = (id) => {
  return {
    type: subCatConstants.SUBCAT_FETCH_EDIT_START,
    id: id,
  }
}

export const subcatFetchEditSuccess = (subcatData) => {
  return {
    type: subCatConstants.SUBCAT_FETCH_EDIT_SUCCESS,
    subcatData: subcatData,
  }
}

export const subcatFetchEditFail = (error) => {
  return {
    type: subCatConstants.SUBCAT_LIST_FAIL,
    error: error,
  }
}

export const subcatEditStart = (formdata) => {
  return {
    type: subCatConstants.SUBCAT_EDIT_START,
    formdata: formdata,
  }
}

export const subcatEditSuccess = (response) => {
  return {
    type: subCatConstants.SUBCAT_EDIT_SUCCESS,
    response: response,
  }
}

export const subcatEditFail = (error) => {
  return {
    type: subCatConstants.SUBCAT_EDIT_FAIL,
    error: error,
  }
}

export const subcatDeleteStart = (id) => {
  return {
    type: subCatConstants.SUBCAT_DELETE_START,
    id: id,
  }
}

export const subcatDeleteSuccess = (response) => {
  return {
    type: subCatConstants.SUBCAT_DELETE_SUCCESS,
    response: response,
  }
}

export const subcatDeleteFail = (error) => {
  return {
    type: subCatConstants.SUBCAT_DELETE_FAIL,
    error: error,
  }
}

export const subcatReset = () => {
  return {
    type: subCatConstants.SUBCAT_RESET,
  }
}
