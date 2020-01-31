import * as leadTypeConstants from '../constants/leadTypeConstants';

export const leadtypeAddStart = (formdata) => {
  return {
    type: leadTypeConstants.LEADTYPE_ADD_START,
    formdata: formdata,
  }
}

export const leadtypeAddSuccess = (response) => {
  return {
    type: leadTypeConstants.LEADTYPE_ADD_SUCCESS,
    response: response,
  }
}

export const leadtypeAddFail = (error) => {
  return {
    type: leadTypeConstants.LEADTYPE_ADD_FAIL,
    error: error,
  }
}

export const leadtypeListStart = () => {
  return {
    type: leadTypeConstants.LEADTYPE_LIST_START
  }
}

export const leadtypeListSuccess = (list) => {
  return {
    type: leadTypeConstants.LEADTYPE_LIST_SUCCESS,
    leadTypeList: list,
  }
}

export const leadtypeListFail = (error) => {
  return {
    type: leadTypeConstants.LEADTYPE_LIST_FAIL,
    error: error,
  }
}

export const leadtypeFetchEditDataStart = (id) => {
  return {
    type: leadTypeConstants.LEADTYPE_FETCH_EDITDATA_START,
    id: id,
  }
}

export const leadtypeFetchEditDataSuccess = (data) => {
  return {
    type: leadTypeConstants.LEADTYPE_FETCH_EDITDATA_SUCCESS,
    leadTypeData: data,
  }
}

export const leadtypeFetchEditDataFail = (error) => {
  return {
    type: leadTypeConstants.LEADTYPE_FETCH_EDITDATA_FAIL,
    error: error,
  }
}

export const leadtypeEditStart = (formdata) => {
  return {
    type: leadTypeConstants.LEADTYPE_EDIT_START,
    formdata: formdata,
  }
}

export const leadtypeEditSuccess = (response) => {
  return {
    type: leadTypeConstants.LEADTYPE_EDIT_SUCCESS,
    response: response,
  }
}

export const leadtypeEditFail = (error) => {
  return {
    type: leadTypeConstants.LEADTYPE_EDIT_FAIL,
    error: error,
  }
}

export const leadtypeDeleteStart = (id) => {
  return {
    type: leadTypeConstants.LEADTYPE_DELETE_START,
    id: id,
  }
}

export const leadtypeDeleteSuccess = (response) => {
  return {
    type: leadTypeConstants.LEADTYPE_DELETE_SUCCESS,
    response: response,
  }
}

export const leadtypeDeleteFail = (error) => {
  return {
    type: leadTypeConstants.LEADTYPE_DELETE_FAIL,
    error: error,
  }
}

export const leadtypeFetchFromCategoryStart = (catName) => {
  return {
    type: leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_START,
    catName: catName,
  }
}

export const leadtypeFetchFromCategorySuccess = (response) => {
  return {
    type: leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_SUCCESS,
    response: response,
  }
}

export const leadtypeFetchFromCategoryFail = (error) => {
  return {
    type: leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_FAIL,
    error: error,
  }
}

export const leadtypeReset = () => {
  return {
    type: leadTypeConstants.LEADTYPE_RESET
  }
}