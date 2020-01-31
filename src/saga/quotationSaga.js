import { call, put, takeLatest } from 'redux-saga/effects';

import * as quotationConstants from '../store/constants/quotationConstants';
import * as quotationActions from '../store/actions/quotationAction';
import * as quotationService from '../service/quotationService';
import { CATCH_ERROR } from '../config/config';


export function* quotationListSaga() {
  try {
    const response = yield call(quotationService.quotationList);
    yield put(quotationActions.quotationListSuccess(response.data.data.quotationList));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.quotationListFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.quotationListFail(CATCH_ERROR));
    }
  }
}

export function* quotationAddSaga(action) {
  try {
    const response = yield call(quotationService.quotationAdd, action.formdata);
    yield put(quotationActions.quotationAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.quotationAddFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.quotationAddFail(CATCH_ERROR));
    }
  }
}

export function* quotationFetchEditDataSaga(action) {
  try {
    const response = yield call(quotationService.quotationEditData, action.id);
    yield put(quotationActions.quotationFetchEditSuccess(response.data.data.quotationData));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.quotationFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.quotationFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* quotationEditSaga(action) {
  try {
    const response = yield call(quotationService.quotationEdit, action.formdata);
    yield put(quotationActions.quotationEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.quotationEditFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.quotationEditFail(CATCH_ERROR));
    }
  }
}

export function* quotationDeleteSaga(action) {
  try {
    const response = yield call(quotationService.quotationDelete, action.id);
    yield put(quotationActions.quotationDeleteSuccess(response.data.msg));
    yield put(quotationActions.quotationListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.quotationDeleteFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.quotationDeleteFail(CATCH_ERROR));
    }
  }
}

export function* quotationUserDetailsFromMobileSaga(action) {
  try {
    const response = yield call(quotationService.quotationUserDetailsFromMobile, action.mobile);
    yield put(quotationActions.getUserDetailsFromMobileSuccess(response.data.data));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.getUserDetailsFromMobileFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.getUserDetailsFromMobileFail(CATCH_ERROR));
    }
  }
}

export function* quotationSearchProductSaga(action) {
  try {
    const response = yield call(quotationService.quotationSearchProduct, action.formdata);
    yield put(quotationActions.searchProductSuccess(response.data.data));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.searchProductFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.searchProductFail(CATCH_ERROR));
    }
  }
}

export function* quotationInsidePackingSaga(action) {
  try {
    const response = yield call(quotationService.quotationInsidePacking, action.id);
    yield put(quotationActions.getInsidePackingSuccess(response.data.data.productDetails));
  }
  catch (error) {
    if (error.response) {
      yield put(quotationActions.getInsidePackingFail(error.response.data.msg));
    }
    else {
      yield put(quotationActions.getInsidePackingFail(CATCH_ERROR));
    }
  }
}


export function* quotationFlowWatcher() {
  yield takeLatest(quotationConstants.QUOTATION_LIST_START, quotationListSaga);
  yield takeLatest(quotationConstants.QUOTATION_ADD_START, quotationAddSaga);
  yield takeLatest(quotationConstants.QUOTATION_DELETE_START, quotationDeleteSaga);
  yield takeLatest(quotationConstants.QUOTATION_FETCH_EDIT_START, quotationFetchEditDataSaga);
  yield takeLatest(quotationConstants.QUOTATION_EDIT_START, quotationEditSaga);
  yield takeLatest(quotationConstants.GET_USER_DETAILS_FROM_MOBILE_START, quotationUserDetailsFromMobileSaga);
  yield takeLatest(quotationConstants.SEARCH_PRODUCT_START, quotationSearchProductSaga);
  yield takeLatest(quotationConstants.GET_INSIDE_PACKING_START, quotationInsidePackingSaga);
}