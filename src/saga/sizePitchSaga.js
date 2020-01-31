import { call, put, takeLatest } from 'redux-saga/effects';

import * as sizePitchConstants from '../store/constants/sizePitchConstants';
import * as sizePitchAction from '../store/actions/sizePitchAction';
import * as sizePitchService from '../service/sizePitchService';
import { CATCH_ERROR } from '../config/config';


export function* SizePitchAddSaga(action) {
  try {
    const response = yield call(sizePitchService.sizepitchAdd, action.formdata);
    yield put(sizePitchAction.sizepitchAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(sizePitchAction.sizepitchAddFail(error.response.data.msg));
    }
    else {
      yield put(sizePitchAction.sizepitchAddFail(CATCH_ERROR));
    }
  }
}

export function* SizePitchListSaga() {
  try {
    const response = yield call(sizePitchService.sizepitchList);
    yield put(sizePitchAction.sizepitchListSuccess(response.data.data.sizepitches));
  }
  catch (error) {
    if (error.response) {
      yield put(sizePitchAction.sizepitchListFail(error.response.data.msg));
    }
    else {
      yield put(sizePitchAction.sizepitchListFail(CATCH_ERROR));
    }
  }
}

export function* SizePitchFetchEditDataSaga(action) {
  try {
    const response = yield call(sizePitchService.sizepitchFetchEditData, action.id);
    yield put(sizePitchAction.sizepitchFetchEditDataSuccess(response.data.data.sizepitchData));
  }
  catch (error) {
    if (error.response) {
      yield put(sizePitchAction.sizepitchFetchEditDataFail(error.response.data.msg));
    }
    else {
      yield put(sizePitchAction.sizepitchFetchEditDataFail(CATCH_ERROR));
    }
  }
}

export function* SizePitchEditSaga(action) {
  try {
    const response = yield call(sizePitchService.sizepitchEdit, action.formdata);
    yield put(sizePitchAction.sizepitchEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(sizePitchAction.sizepitchEditFail(error.response.data.msg));
    }
    else {
      yield put(sizePitchAction.sizepitchEditFail(CATCH_ERROR));
    }
  }
}

export function* SizePitchDeleteSaga(action) {
  try {
    const response = yield call(sizePitchService.sizepitchDelete, action.id);
    yield put(sizePitchAction.sizepitchDeleteSuccess(response.data.msg));
    yield put(sizePitchAction.sizepitchListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(sizePitchAction.sizepitchDeleteFail(error.response.data.msg));
    }
    else {
      yield put(sizePitchAction.sizepitchDeleteFail(CATCH_ERROR));
    }
  }
}


export function* SizepitchFetchFromCatSaga(action) {
  try {
    const response = yield call(sizePitchService.sizepitchFetchFromCategory, action.catName);
    yield put(sizePitchAction.sizepitchFetchFromCategorySuccess(response.data.data.sizepitchmasters));
  }
  catch (error) {
    if (error.response) {
      yield put(sizePitchAction.sizepitchFetchFromCategoryFail(error.response.data.msg));
    }
    else {
      yield put(sizePitchAction.sizepitchFetchFromCategoryFail(CATCH_ERROR));
    }
  }
}

export function* SizePitchFlowWatcher() {
  yield takeLatest(sizePitchConstants.SIZEPITCH_ADD_START, SizePitchAddSaga);
  yield takeLatest(sizePitchConstants.SIZEPITCH_LIST_START, SizePitchListSaga);
  yield takeLatest(sizePitchConstants.SIZEPITCH_FETCH_EDITDATA_START, SizePitchFetchEditDataSaga);
  yield takeLatest(sizePitchConstants.SIZEPITCH_EDIT_START,SizePitchEditSaga);
  yield takeLatest(sizePitchConstants.SIZEPITCH_DELETE_START, SizePitchDeleteSaga);
  yield takeLatest(sizePitchConstants.SIZEPITCH_FETCH_FROM_CATEGORY_START, SizepitchFetchFromCatSaga);
}