import * as seriesConstants from '../constants/seriesConstants';

export const seriesListStart = () => {
  return {
    type: seriesConstants.SERIES_LIST_START,
  }
}

export const seriesListSuccess = (seriesList) => {
  return {
    type: seriesConstants.SERIES_LIST_SUCCESS,
    seriesList: seriesList,
  }
}

export const seriesListFail = (error) => {
  return {
    type: seriesConstants.SERIES_LIST_FAIL,
    error: error,
  }
}


export const seriesAddStart = (formdata) => {
  return {
    type: seriesConstants.SERIES_ADD_START,
    formdata: formdata,
  }
}

export const seriesAddSuccess = (response) => {
  return {
    type: seriesConstants.SERIES_ADD_SUCCESS,
    subcatmaster: response,
  }
}

export const seriesAddFail = (error) => {
  return {
    type: seriesConstants.SERIES_ADD_FAIL,
    error: error,
  }
}

export const seriesFetchEditStart = (id) => {
  return {
    type: seriesConstants.SERIES_FETCH_EDIT_START,
    id: id,
  }
}

export const seriesFetchEditSuccess = (seriesData) => {
  return {
    type: seriesConstants.SERIES_FETCH_EDIT_SUCCESS,
    seriesData: seriesData,
  }
}

export const seriesFetchEditFail = (error) => {
  return {
    type: seriesConstants.SERIES_LIST_FAIL,
    error: error,
  }
}

export const seriesEditStart = (formdata) => {
  return {
    type: seriesConstants.SERIES_EDIT_START,
    formdata: formdata,
  }
}

export const seriesEditSuccess = (response) => {
  return {
    type: seriesConstants.SERIES_EDIT_SUCCESS,
    response: response,
  }
}

export const seriesEditFail = (error) => {
  return {
    type: seriesConstants.SERIES_EDIT_FAIL,
    error: error,
  }
}

export const seriesDeleteStart = (id) => {
  return {
    type: seriesConstants.SERIES_DELETE_START,
    id: id,
  }
}

export const seriesDeleteSuccess = (response) => {
  return {
    type: seriesConstants.SERIES_DELETE_SUCCESS,
    response: response,
  }
}

export const seriesDeleteFail = (error) => {
  return {
    type: seriesConstants.SERIES_DELETE_FAIL,
    error: error,
  }
}

export const getSubcatFromCatStart = (catname) => {
  return {
    type: seriesConstants.GET_SUBCAT_FROM_CAT_START,
    catname: catname,
  }
}

export const getSubcatFromCatSuccess = (response) => {
  return {
    type: seriesConstants.GET_SUBCAT_FROM_CAT_SUCCESS,
    response: response,
  }
}

export const getSubcatFromCatFail = (error) => {
  return {
    type: seriesConstants.GET_SUBCAT_FROM_CAT_FAIL,
    error: error,
  }
}


export const seriesFetchFromCategoryStart = (catName, subcatId) => {
  return {
    type: seriesConstants.SERIES_FETCH_FROM_CATEGORY_START,
    catName: catName,
    subcatId: subcatId
  }
}

export const seriesFetchFromCategorySuccess = (response) => {
  return {
    type: seriesConstants.SERIES_FETCH_FROM_CATEGORY_SUCCESS,
    response: response,
  }
}

export const seriesFetchFromCategoryFail = (error) => {
  return {
    type: seriesConstants.SERIES_FETCH_FROM_CATEGORY_FAIL,
    error: error,
  }
}



export const seriesReset = () => {
  return {
    type: seriesConstants.SERIES_RESET,
  }
}
