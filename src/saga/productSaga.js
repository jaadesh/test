import { call, put, takeLatest } from 'redux-saga/effects';

import * as productConstants from '../store/constants/productConstants';
import * as productActions from '../store/actions/productAction';
import * as productService from '../service/productService';
import { CATCH_ERROR } from '../config/config';


export function* productListSaga() {
  try {
    const response = yield call(productService.productList);
    yield put(productActions.productListSuccess(response.data.data.productList));
  }
  catch (error) {
    if (error.response) {
      yield put(productActions.productListFail(error.response.data.msg));
    }
    else {
      yield put(productActions.productListFail(CATCH_ERROR));
    }
  }
}

export function* productAddSaga(action) {
  try {
    const response = yield call(productService.productAdd, action.formdata);
    yield put(productActions.productAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(productActions.productAddFail(error.response.data.msg));
    }
    else {
      yield put(productActions.productAddFail(CATCH_ERROR));
    }
  }
}

export function* productFetchEditDataSaga(action) {
  try {
    const response = yield call(productService.productEditData, action.id);
    yield put(productActions.productFetchEditSuccess(response.data.data));
  }
  catch (error) {
    if (error.response) {
      yield put(productActions.productFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(productActions.productFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* productEditSaga(action) {
  try {
    const response = yield call(productService.productEdit, action.formdata);
    yield put(productActions.productEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(productActions.productEditFail(error.response.data.msg));
    }
    else {
      yield put(productActions.productEditFail(CATCH_ERROR));
    }
  }
}

export function* productDeleteSaga(action) {
  try {
    const response = yield call(productService.productdelete, action.id);
    yield put(productActions.productDeleteSuccess(response.data.msg));
    yield put(productActions.productListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(productActions.productDeleteFail(error.response.data.msg));
    }
    else {
      yield put(productActions.productDeleteFail(CATCH_ERROR));
    }
  }
}

export function* productRemoveImageSaga(action) {
  try {
    const response = yield call(productService.productRemoveImage, action);
    yield put(productActions.productRemoveImageSuccess(response.data.msg));
    yield put(productActions.productImageRefreshStart(action.path,action.formdata));
  }
  catch (error) {
    if (error.response) {
      yield put(productActions.productRemoveImageFail(error.response.data.msg));
    }
    else {
      yield put(productActions.productRemoveImageFail(CATCH_ERROR));
    }
  }
}


export function* productFlowWatcher() {
  yield takeLatest(productConstants.PRODUCT_LIST_START, productListSaga);
  yield takeLatest(productConstants.PRODUCT_ADD_START, productAddSaga);
  yield takeLatest(productConstants.PRODUCT_DELETE_START, productDeleteSaga);
  yield takeLatest(productConstants.PRODUCT_FETCH_EDIT_START, productFetchEditDataSaga);
  yield takeLatest(productConstants.PRODUCT_EDIT_START, productEditSaga);
  yield takeLatest(productConstants.PRODUCT_REMOVE_IMAGE_START, productRemoveImageSaga);
}