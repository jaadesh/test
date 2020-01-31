import * as sizePitchConstants from '../constants/sizePitchConstants';
import { updateObject } from '../../shared/utility';

const initialState = {
  sizepitcherror: null,
  sizepitchloading: false,
  sizepitchresponse: null,
  sizepitchList: null,
  sizepitchData: null,
}

const sizepitchAddStart = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null, sizepitchloading: true
  });
}

const sizepitchAddSuccess = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null,
    sizepitchloading: false,
    sizepitchresponse: action.response
  })
}

const sizepitchAddFail = (state, action) => {
  return updateObject(state, {
    sizepitcherror: action.error,
    sizepitchloading: false,
  })
}

const sizepitchListStart = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null, sizepitchloading: true
  });
}

const sizepitchListSuccess = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null,
    sizepitchloading: false,
    sizepitchList: action.sizePitchList
  })
}

const sizepitchListFail = (state, action) => {
  return updateObject(state, {
    sizepitcherror: action.error,
    sizepitchloading: false,
  })
}

const sizepitchFetchEditDataStart = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null, sizepitchloading: true
  });
}

const sizepitchFetchEditDataSuccess = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null,
    sizepitchloading: false,
    sizepitchData: action.sizePitchData
  })
}

const sizepitchFetchEditDataFail = (state, action) => {
  return updateObject(state, {
    sizepitcherror: action.error,
    sizepitchloading: false,
  })
}

const sizepitchEditStart = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null, sizepitchloading: true
  });
}

const sizepitchEditSuccess = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null,
    sizepitchloading: false,
    sizepitchresponse: action.response
  })
}

const sizepitchEditFail = (state, action) => {
  return updateObject(state, {
    sizepitcherror: action.error,
    sizepitchloading: false,
  })
}

const sizepitchDeleteStart = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null, sizepitchloading: true
  });
}

const sizepitchDeleteSuccess = (state, action) => {
  return updateObject(state, {
    sizepitcherror: null,
    sizepitchloading: false,
    sizepitchresponse: action.response
  })
}

const sizepitchDeleteFail = (state, action) => {
  return updateObject(state, {
    sizepitcherror: action.error,
    sizepitchloading: false,
  })
}


const sizepitchFetchFromCategoryStart = (state, action) => {
  return updateObject(state, {
    error: null, loading: true
  });
}

const sizepitchFetchFromCategorySuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    sizepitchList: action.response
  })
}

const sizepitchFetchFromCategoryFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const subCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case sizePitchConstants.SIZEPITCH_ADD_START: return sizepitchAddStart(state, action);
    case sizePitchConstants.SIZEPITCH_ADD_SUCCESS: return sizepitchAddSuccess(state, action);
    case sizePitchConstants.SIZEPITCH_ADD_FAIL: return sizepitchAddFail(state, action);
    case sizePitchConstants.SIZEPITCH_LIST_START: return sizepitchListStart(state, action);
    case sizePitchConstants.SIZEPITCH_LIST_SUCCESS: return sizepitchListSuccess(state, action);
    case sizePitchConstants.SIZEPITCH_LIST_FAIL: return sizepitchListFail(state, action);
    case sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_START: return sizepitchFetchEditDataStart(state, action);
    case sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_SUCCESS: return sizepitchFetchEditDataSuccess(state, action);
    case sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_FAIL: return sizepitchFetchEditDataFail(state, action);
    case sizePitchConstants.SIZEPITCH_EDIT_START: return sizepitchEditStart(state, action);
    case sizePitchConstants.SIZEPITCH_EDIT_SUCCESS: return sizepitchEditSuccess(state, action);
    case sizePitchConstants.SIZEPITCH_EDIT_FAIL: return sizepitchEditFail(state, action);
    case sizePitchConstants.SIZEPITCH_DELETE_START: return sizepitchDeleteStart(state, action);
    case sizePitchConstants.SIZEPITCH_DELETE_SUCCESS: return sizepitchDeleteSuccess(state, action);
    case sizePitchConstants.SIZEPITCH_DELETE_FAIL: return sizepitchDeleteFail(state, action);
    case sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_START: return sizepitchFetchFromCategoryStart(state, action);
    case sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_SUCCESS: return sizepitchFetchFromCategorySuccess(state, action);
    case sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_FAIL: return sizepitchFetchFromCategoryFail(state, action);
    case sizePitchConstants.SIZEPITCH_RESET: return initialState;
    default: return state;
  }
}

export default subCatReducer;