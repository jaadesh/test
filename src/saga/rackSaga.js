import { call, put, takeLatest } from 'redux-saga/effects';

import * as rackConstants from '../store/constants/rackConstants';
import * as rackActions from '../store/actions/rackAction';
import * as rackService from '../service/rackService';
import { CATCH_ERROR } from '../config/config';


export function* rackListSaga() {
  try {
    const response = yield call(rackService.rackList);
    yield put(rackActions.rackListSuccess(response.data.data.racks));
  }
  catch (error) {
    if (error.response) {
      yield put(rackActions.rackListFail(error.response.data.msg));
    }
    else {
      yield put(rackActions.rackListFail(CATCH_ERROR));
    }
  }
}

export function* rackAddSaga(action) {
  try {
    const response = yield call(rackService.rackAdd, action.formdata);
    yield put(rackActions.rackAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(rackActions.rackAddFail(error.response.data.msg));
    }
    else {
      yield put(rackActions.rackAddFail(CATCH_ERROR));
    }
  }
}

export function* rackFetchEditDataSaga(action) {
  try {
    const response = yield call(rackService.rackEditData, action.id);
    yield put(rackActions.rackFetchEditSuccess(response.data.data.rack));
  }
  catch (error) {
    if (error.response) {
      yield put(rackActions.rackFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(rackActions.rackFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* rackEditSaga(action) {
  try {
    const response = yield call(rackService.rackEdit, action.formdata);
    yield put(rackActions.rackEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(rackActions.rackEditFail(error.response.data.msg));
    }
    else {
      yield put(rackActions.rackEditFail(CATCH_ERROR));
    }
  }
}

export function* rackDeleteSaga(action) {
  try {
    const response = yield call(rackService.rackDelete, action.id);
    yield put(rackActions.rackDeleteSuccess(response.data.msg));
    yield put(rackActions.rackListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(rackActions.rackDeleteFail(error.response.data.msg));
    }
    else {
      yield put(rackActions.rackDeleteFail(CATCH_ERROR));
    }
  }
}


export function* rackFlowWatcher() {
  yield takeLatest(rackConstants.RACK_LIST_START, rackListSaga);
  yield takeLatest(rackConstants.RACK_ADD_START, rackAddSaga);
  yield takeLatest(rackConstants.RACK_DELETE_START, rackDeleteSaga);
  yield takeLatest(rackConstants.RACK_FETCH_EDIT_START, rackFetchEditDataSaga);
  yield takeLatest(rackConstants.RACK_EDIT_START, rackEditSaga);
}