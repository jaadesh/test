import { call, put, takeLatest } from 'redux-saga/effects';

import * as valueConstants from '../store/constants/valueConstants';
import * as valueActions from '../store/actions/valueAction';
import * as valueService from '../service/valueService';
import { CATCH_ERROR } from '../config/config';


export function* valueListSaga() {
  try {
    const response = yield call(valueService.valueList);
    yield put(valueActions.valueListSuccess(response.data.data.values));
  }
  catch (error) {
    if (error.response) {
      yield put(valueActions.valueListFail(error.response.data.msg));
    }
    else {
      yield put(valueActions.valueListFail(CATCH_ERROR));
    }
  }
}

export function* valueAddSaga(action) {
  try {
    const response = yield call(valueService.valueAdd, action.formdata);
    yield put(valueActions.valueAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(valueActions.valueAddFail(error.response.data.msg));
    }
    else {
      yield put(valueActions.valueAddFail(CATCH_ERROR));
    }
  }
}

export function* valueFetchEditDataSaga(action) {
  try {
    const response = yield call(valueService.valueEditData, action.id);
    yield put(valueActions.valueFetchEditSuccess(response.data.data.value));
  }
  catch (error) {
    if (error.response) {
      yield put(valueActions.valueFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(valueActions.valueFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* valueEditSaga(action) {
  try {
    const response = yield call(valueService.valueEdit, action.formdata);
    yield put(valueActions.valueEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(valueActions.valueEditFail(error.response.data.msg));
    }
    else {
      yield put(valueActions.valueEditFail(CATCH_ERROR));
    }
  }
}

export function* valueDeleteSaga(action) {
  try {
    const response = yield call(valueService.valueDelete, action.id);
    yield put(valueActions.valueDeleteSuccess(response.data.msg));
    yield put(valueActions.valueListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(valueActions.valueDeleteFail(error.response.data.msg));
    }
    else {
      yield put(valueActions.valueDeleteFail(CATCH_ERROR));
    }
  }
}


export function* valueFlowWatcher() {
  yield takeLatest(valueConstants.VALUE_LIST_START, valueListSaga);
  yield takeLatest(valueConstants.VALUE_ADD_START, valueAddSaga);
  yield takeLatest(valueConstants.VALUE_DELETE_START, valueDeleteSaga);
  yield takeLatest(valueConstants.VALUE_FETCH_EDIT_START, valueFetchEditDataSaga);
  yield takeLatest(valueConstants.VALUE_EDIT_START, valueEditSaga);
}