import * as valueConstants from '../constants/valueConstants';

export const valueListStart = () => {
  return {
    type: valueConstants.VALUE_LIST_START,
  }
}

export const valueListSuccess = (valueList) => {
  return {
    type: valueConstants.VALUE_LIST_SUCCESS,
    valueList: valueList,
  }
}

export const valueListFail = (error) => {
  return {
    type: valueConstants.VALUE_LIST_FAIL,
    error: error,
  }
}


export const valueAddStart = (formdata) => {
  return {
    type: valueConstants.VALUE_ADD_START,
    formdata: formdata,
  }
}

export const valueAddSuccess = (response) => {
  return {
    type: valueConstants.VALUE_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const valueAddFail = (error) => {
  return {
    type: valueConstants.VALUE_ADD_FAIL,
    error: error,
  }
}

export const valueFetchEditStart = (id) => {
  return {
    type: valueConstants.VALUE_FETCH_EDIT_START,
    id: id,
  }
}

export const valueFetchEditSuccess = (valueData) => {
  return {
    type: valueConstants.VALUE_FETCH_EDIT_SUCCESS,
    valueData: valueData,
  }
}

export const valueFetchEditFail = (error) => {
  return {
    type: valueConstants.VALUE_LIST_FAIL,
    error: error,
  }
}

export const valueEditStart = (formdata) => {
  return {
    type: valueConstants.VALUE_EDIT_START,
    formdata: formdata,
  }
}

export const valueEditSuccess = (response) => {
  return {
    type: valueConstants.VALUE_EDIT_SUCCESS,
    response: response,
  }
}

export const valueEditFail = (error) => {
  return {
    type: valueConstants.VALUE_EDIT_FAIL,
    error: error,
  }
}

export const valueDeleteStart = (id) => {
  return {
    type: valueConstants.VALUE_DELETE_START,
    id: id,
  }
}

export const valueDeleteSuccess = (response) => {
  return {
    type: valueConstants.VALUE_DELETE_SUCCESS,
    response: response,
  }
}

export const valueDeleteFail = (error) => {
  return {
    type: valueConstants.VALUE_DELETE_FAIL,
    error: error,
  }
}

export const valueReset = () => {
  return {
    type: valueConstants.VALUE_RESET,
  }
}
