import * as rackConstants from '../constants/rackConstants';

export const rackListStart = () => {
  return {
    type: rackConstants.RACK_LIST_START,
  }
}

export const rackListSuccess = (rackList) => {
  return {
    type: rackConstants.RACK_LIST_SUCCESS,
    rackList: rackList,
  }
}

export const rackListFail = (error) => {
  return {
    type: rackConstants.RACK_LIST_FAIL,
    error: error,
  }
}


export const rackAddStart = (formdata) => {
  return {
    type: rackConstants.RACK_ADD_START,
    formdata: formdata,
  }
}

export const rackAddSuccess = (response) => {
  return {
    type: rackConstants.RACK_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const rackAddFail = (error) => {
  return {
    type: rackConstants.RACK_ADD_FAIL,
    error: error,
  }
}

export const rackFetchEditStart = (id) => {
  return {
    type: rackConstants.RACK_FETCH_EDIT_START,
    id: id,
  }
}

export const rackFetchEditSuccess = (rackData) => {
  return {
    type: rackConstants.RACK_FETCH_EDIT_SUCCESS,
    rackData: rackData,
  }
}

export const rackFetchEditFail = (error) => {
  return {
    type: rackConstants.RACK_LIST_FAIL,
    error: error,
  }
}

export const rackEditStart = (formdata) => {
  return {
    type: rackConstants.RACK_EDIT_START,
    formdata: formdata,
  }
}

export const rackEditSuccess = (response) => {
  return {
    type: rackConstants.RACK_EDIT_SUCCESS,
    response: response,
  }
}

export const rackEditFail = (error) => {
  return {
    type: rackConstants.RACK_EDIT_FAIL,
    error: error,
  }
}

export const rackDeleteStart = (id) => {
  return {
    type: rackConstants.RACK_DELETE_START,
    id: id,
  }
}

export const rackDeleteSuccess = (response) => {
  return {
    type: rackConstants.RACK_DELETE_SUCCESS,
    response: response,
  }
}

export const rackDeleteFail = (error) => {
  return {
    type: rackConstants.RACK_DELETE_FAIL,
    error: error,
  }
}

export const rackReset = () => {
  return {
    type: rackConstants.RACK_RESET,
  }
}
