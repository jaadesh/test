import { call, put, takeLatest } from 'redux-saga/effects';

import * as userConstants from '../store/constants/userConstants';
import * as userActions from '../store/actions/userAction';
import * as userService from '../service/userService';
import { CATCH_ERROR } from '../config/config';


export function* UserListSaga() {
  try {
    const response = yield call(userService.userList);
    yield put(userActions.userListSuccess(response.data.data.users));
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.userListFail(error.response.data.msg));
    }
    else {
      yield put(userActions.userListFail(CATCH_ERROR));
    }
  }
}


export function* UserAddSaga(action) {
  try {
    const response = yield call(userService.addUser, action.formdata);
    yield put(userActions.userAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.userAddFail(error.response.data.msg));
    }
    else {
      yield put(userActions.userAddFail(CATCH_ERROR));
    }
  }
}

export function* UserFetchEditDataSaga(action) {
  try {
    const response = yield call(userService.userEditData, action.id);
    console.log("response",response);
    yield put(userActions.userFetchEditSuccess(response.data.data.user));
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.userFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(userActions.userFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* UserEditSaga(action) {
  try {
    const response = yield call(userService.userEdit, action.formdata);
    yield put(userActions.userEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.userEditFail(error.response.data.msg));
    }
    else {
      yield put(userActions.userEditFail(CATCH_ERROR));
    }
  }
}

export function* UserDeleteSaga(action) {
  try {
    const response = yield call(userService.deleteUser, action.id);
    yield put(userActions.userDeleteSuccess(response.data.msg));
    yield put(userActions.userListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.userDeleteFail(error.response.data.msg));
    }
    else {
      yield put(userActions.userDeleteFail(CATCH_ERROR));
    }
  }
}


export function* GetCountrySaga() {
  try {
    const response = yield call(userService.getCountry);
    yield put(userActions.getCountrySuccess(response.data.data.countryList));
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.getCountryFail(error.response.data.msg));
    }
    else {
      yield put(userActions.getCountryFail(CATCH_ERROR));
    }
  }
}

export function* GetStateSaga(action) {
  
  try {
    const response = yield call(userService.getState, action.id);
    yield put(userActions.getStateSuccess(response.data.data.stateList));
  }
  catch (error) {
    if (error.response) {
      yield put(userActions.getStateFail(error.response.data.msg));
    }
    else {
      yield put(userActions.getStateFail(CATCH_ERROR));
    }
  }
}


export function* userFlowWatcher() {
  yield takeLatest(userConstants.USER_LIST_START, UserListSaga);
  yield takeLatest(userConstants.USER_ADD_START, UserAddSaga);
  yield takeLatest(userConstants.USER_DELETE_START, UserDeleteSaga);
  yield takeLatest(userConstants.USER_FETCH_EDIT_START, UserFetchEditDataSaga);
  yield takeLatest(userConstants.USER_EDIT_START, UserEditSaga);
  yield takeLatest(userConstants.GET_COUNTRY_START, GetCountrySaga);
  yield takeLatest(userConstants.GET_STATE_START, GetStateSaga);
}