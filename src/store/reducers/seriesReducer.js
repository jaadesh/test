import * as seriesConstants from '../constants/seriesConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  error: null,
  loading: false,
  response: null,
  seriesList: null,
  seriesData: null,
  subcategorymaster: null
}

const seriesListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    seriesList: null,
  })
}

const seriesListSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    seriesList: action.seriesList,
  })
}

const seriesListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    seriesList: [],
  })
}

const seriesAddStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const seriesAddSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.subcatmaster
  })
}

const seriesAddFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const seriesFetchEditStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  })
}

const seriesFetchEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    seriesData: action.seriesData,

  })
}

const seriesFetchEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    seriesData: null,
  })
}

const seriesEditStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const seriesEditSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const seriesEditFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const seriesDeleteStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const seriesDeleteSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    response: action.response
  })
}

const seriesDeleteFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const getSubcatFromCatStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
    subcategorymaster: null,
  })
}

const getSubcatFromCatSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    subcategorymaster: action.response,
  })
}

const getSubcatFromCatFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    subcategorymaster: null,
  })
}


const seriesFetchFromCategoryStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const seriesFetchFromCategorySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    seriesList: action.response
  })
}

const seriesFetchFromCategoryFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}



const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case seriesConstants.SERIES_LIST_START: return seriesListStart(state, action);
    case seriesConstants.SERIES_LIST_SUCCESS: return seriesListSuccess(state, action);
    case seriesConstants.SERIES_LIST_FAIL: return seriesListFail(state, action);

    case seriesConstants.SERIES_ADD_START: return seriesAddStart(state, action);
    case seriesConstants.SERIES_ADD_SUCCESS: return seriesAddSuccess(state, action);
    case seriesConstants.SERIES_ADD_FAIL: return seriesAddFail(state, action);

    case seriesConstants.SERIES_FETCH_EDIT_START: return seriesFetchEditStart(state, action);
    case seriesConstants.SERIES_FETCH_EDIT_SUCCESS: return seriesFetchEditSuccess(state, action);
    case seriesConstants.SERIES_FETCH_EDIT_FAIL: return seriesFetchEditFail(state, action);

    case seriesConstants.SERIES_EDIT_START: return seriesEditStart(state, action);
    case seriesConstants.SERIES_EDIT_SUCCESS: return seriesEditSuccess(state, action);
    case seriesConstants.SERIES_EDIT_FAIL: return seriesEditFail(state, action);

    case seriesConstants.SERIES_DELETE_START: return seriesDeleteStart(state, action);
    case seriesConstants.SERIES_DELETE_SUCCESS: return seriesDeleteSuccess(state, action);
    case seriesConstants.SERIES_DELETE_FAIL: return seriesDeleteFail(state, action);

    case seriesConstants.GET_SUBCAT_FROM_CAT_START: return getSubcatFromCatStart(state, action);
    case seriesConstants.GET_SUBCAT_FROM_CAT_SUCCESS: return getSubcatFromCatSuccess(state, action);
    case seriesConstants.GET_SUBCAT_FROM_CAT_FAIL: return getSubcatFromCatFail(state, action);

    case seriesConstants.SERIES_FETCH_FROM_CATEGORY_START: return seriesFetchFromCategoryStart(state, action);
    case seriesConstants.SERIES_FETCH_FROM_CATEGORY_SUCCESS: return seriesFetchFromCategorySuccess(state, action);
    case seriesConstants.SERIES_FETCH_FROM_CATEGORY_FAIL: return seriesFetchFromCategoryFail(state, action);

    case seriesConstants.SERIES_RESET: return initialState;

    default: return state;
  }
}

export default seriesReducer;