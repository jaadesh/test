import * as sizePitchConstants from '../constants/sizePitchConstants';

export const sizepitchAddStart = (formdata) => {
  return {
    type: sizePitchConstants.SIZEPITCH_ADD_START,
    formdata: formdata,
  }
}

export const sizepitchAddSuccess = (response) => {
  return {
    type: sizePitchConstants.SIZEPITCH_ADD_SUCCESS,
    response: response,
  }
}

export const sizepitchAddFail = (error) => {
  return {
    type: sizePitchConstants.SIZEPITCH_ADD_FAIL,
    error: error,
  }
}

export const sizepitchListStart = () => {
  return {
    type: sizePitchConstants.SIZEPITCH_LIST_START
  }
}

export const sizepitchListSuccess = (list) => {
  return {
    type: sizePitchConstants.SIZEPITCH_LIST_SUCCESS,
    sizePitchList: list,
  }
}

export const sizepitchListFail = (error) => {
  return {
    type: sizePitchConstants.SIZEPITCH_LIST_FAIL,
    error: error,
  }
}

export const sizepitchFetchEditDataStart = (id) => {
  return {
    type: sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_START,
    id: id,
  }
}

export const sizepitchFetchEditDataSuccess = (data) => {
  return {
    type: sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_SUCCESS,
    sizePitchData: data,
  }
}

export const sizepitchFetchEditDataFail = (error) => {
  return {
    type: sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_FAIL,
    error: error,
  }
}

export const sizepitchEditStart = (formdata) => {
  return {
    type: sizePitchConstants.SIZEPITCH_EDIT_START,
    formdata: formdata,
  }
}

export const sizepitchEditSuccess = (response) => {
  return {
    type: sizePitchConstants.SIZEPITCH_EDIT_SUCCESS,
    response: response,
  }
}

export const sizepitchEditFail = (error) => {
  return {
    type: sizePitchConstants.SIZEPITCH_EDIT_FAIL,
    error: error,
  }
}

export const sizepitchDeleteStart = (id) => {
  return {
    type: sizePitchConstants.SIZEPITCH_DELETE_START,
    id: id,
  }
}

export const sizepitchDeleteSuccess = (response) => {
  return {
    type: sizePitchConstants.SIZEPITCH_DELETE_SUCCESS,
    response: response,
  }
}

export const sizepitchDeleteFail = (error) => {
  return {
    type: sizePitchConstants.SIZEPITCH_DELETE_FAIL,
    error: error,
  }
}


export const sizepitchFetchFromCategoryStart = (catName) => {
  return {
    type: sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_START,
    catName: catName,
  }
}

export const sizepitchFetchFromCategorySuccess = (response) => {
  return {
    type: sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_SUCCESS,
    response: response,
  }
}

export const sizepitchFetchFromCategoryFail = (error) => {
  return {
    type: sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_FAIL,
    error: error,
  }
}


export const sizepitchReset = () => {
  return {
    type: sizePitchConstants.SIZEPITCH_RESET
  }
}