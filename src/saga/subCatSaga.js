import { call, put, takeLatest } from 'redux-saga/effects';

import * as subCatConstants from '../store/constants/subCatConstants';
import * as subCatActions from '../store/actions/subCatAction';
import * as subCatService from '../service/subCatService';
import { CATCH_ERROR } from '../config/config';


export function* SubCatListSaga() {
  try {
    const response = yield call(subCatService.subcatList);
    yield put(subCatActions.subcatListSuccess(response.data.data.subcategories));
  }
  catch (error) {
    if (error.response) {
      yield put(subCatActions.subcatListFail(error.response.data.msg));
    }
    else {
      yield put(subCatActions.subcatListFail(CATCH_ERROR));
    }
  }
}

export function* SubCatAddSaga(action) {
  try {
    const response = yield call(subCatService.addSubCat, action.formdata);
    yield put(subCatActions.addSubcatSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(subCatActions.addSubcatFail(error.response.data.msg));
    }
    else {
      yield put(subCatActions.addSubcatFail(CATCH_ERROR));
    }
  }
}

export function* SubCatFetchEditDataSaga(action) {
  try {
    const response = yield call(subCatService.subCatEditData, action.id);
    const subcatData = response.data.data.subcatData
    subcatData.subCatBasePath = response.data.data.subCatBasePath
    yield put(subCatActions.subcatFetchEditSuccess(subcatData));
  }
  catch (error) {
    if (error.response) {
      yield put(subCatActions.subcatFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(subCatActions.subcatFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* SubCatEditSaga(action) {
  try {
    const response = yield call(subCatService.editSubCat, action.formdata);
    yield put(subCatActions.subcatEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(subCatActions.subcatEditFail(error.response.data.msg));
    }
    else {
      yield put(subCatActions.subcatEditFail(CATCH_ERROR));
    }
  }
}

export function* SubCatDeleteSaga(action) {
  try {
    const response = yield call(subCatService.subCatDeleteData, action.id);
    yield put(subCatActions.subcatDeleteSuccess(response.data.msg));
    yield put(subCatActions.subcatListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(subCatActions.subcatDeleteFail(error.response.data.msg));
    }
    else {
      yield put(subCatActions.subcatDeleteFail(CATCH_ERROR));
    }
  }
}

export function* subCatFlowWatcher() {
  yield takeLatest(subCatConstants.ADD_SUBCAT_START, SubCatAddSaga);
  yield takeLatest(subCatConstants.SUBCAT_LIST_START, SubCatListSaga);
  yield takeLatest(subCatConstants.SUBCAT_FETCH_EDIT_START, SubCatFetchEditDataSaga);
  yield takeLatest(subCatConstants.SUBCAT_EDIT_START, SubCatEditSaga);
  yield takeLatest(subCatConstants.SUBCAT_DELETE_START, SubCatDeleteSaga);
}