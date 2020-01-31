import { call, put, takeLatest } from 'redux-saga/effects';

import * as leadTypeConstants from '../store/constants/leadTypeConstants';
import * as leadTypeAction from '../store/actions/leadTypeAction';
import * as leadtypeService from '../service/leadtypeService';
import { CATCH_ERROR } from '../config/config';


export function* LeadTypeAddSaga(action) {
  try {
    const response = yield call(leadtypeService.leadtypeAdd, action.formdata);
    yield put(leadTypeAction.leadtypeAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(leadTypeAction.leadtypeAddFail(error.response.data.msg));
    }
    else {
      yield put(leadTypeAction.leadtypeAddFail(CATCH_ERROR));
    }
  }
}

export function* LeadTypeListSaga() {
  try {
    const response = yield call(leadtypeService.leadtypeList);
    yield put(leadTypeAction.leadtypeListSuccess(response.data.data.leadtypes));
  }
  catch (error) {
    if (error.response) {
      yield put(leadTypeAction.leadtypeListFail(error.response.data.msg));
    }
    else {
      yield put(leadTypeAction.leadtypeListFail(CATCH_ERROR));
    }
  }
}

export function* LeadTypeFetchEditDataSaga(action) {
  try {
    const response = yield call(leadtypeService.leadtypeFetchEditData, action.id);
    yield put(leadTypeAction.leadtypeFetchEditDataSuccess(response.data.data.leadtypeData));
  }
  catch (error) {
    if (error.response) {
      yield put(leadTypeAction.leadtypeFetchEditDataFail(error.response.data.msg));
    }
    else {
      yield put(leadTypeAction.leadtypeFetchEditDataFail(CATCH_ERROR));
    }
  }
}

export function* LeadTypeEditSaga(action) {
  try {
    const response = yield call(leadtypeService.leadtypeEdit, action.formdata);
    yield put(leadTypeAction.leadtypeEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(leadTypeAction.leadtypeEditFail(error.response.data.msg));
    }
    else {
      yield put(leadTypeAction.leadtypeEditFail(CATCH_ERROR));
    }
  }
}

export function* LeadTypeDeleteSaga(action) {
  try {
    const response = yield call(leadtypeService.leadtypeDelete, action.id);
    yield put(leadTypeAction.leadtypeDeleteSuccess(response.data.msg));
    yield put(leadTypeAction.leadtypeListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(leadTypeAction.leadtypeDeleteFail(error.response.data.msg));
    }
    else {
      yield put(leadTypeAction.leadtypeDeleteFail(CATCH_ERROR));
    }
  }
}

export function* LeadTypeFetchFromCatSaga(action) {
  try {
    const response = yield call(leadtypeService.leadtypeFetchFromCategory, action.catName);
    yield put(leadTypeAction.leadtypeFetchFromCategorySuccess(response.data.data.leadmasters));
  }
  catch (error) {
    if (error.response) {
      yield put(leadTypeAction.leadtypeFetchFromCategoryFail(error.response.data.msg));
    }
    else {
      yield put(leadTypeAction.leadtypeFetchFromCategoryFail(CATCH_ERROR));
    }
  }
}

export function* leadTypeFlowWatcher() {
  yield takeLatest(leadTypeConstants.LEADTYPE_ADD_START, LeadTypeAddSaga);
  yield takeLatest(leadTypeConstants.LEADTYPE_LIST_START, LeadTypeListSaga);
  yield takeLatest(leadTypeConstants.LEADTYPE_FETCH_EDITDATA_START, LeadTypeFetchEditDataSaga);
  yield takeLatest(leadTypeConstants.LEADTYPE_EDIT_START, LeadTypeEditSaga);
  yield takeLatest(leadTypeConstants.LEADTYPE_DELETE_START, LeadTypeDeleteSaga);
  yield takeLatest(leadTypeConstants.LEADTYPE_FETCH_FROM_CATEGORY_START, LeadTypeFetchFromCatSaga);
}