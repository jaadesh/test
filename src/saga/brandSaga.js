import { call, put, takeLatest } from 'redux-saga/effects';

import * as brandConstants from '../store/constants/brandConstants';
import * as brandActions from '../store/actions/brandAction';
import * as brandService from '../service/brandService';
import { CATCH_ERROR } from '../config/config';

export function* BrandAddSaga(action) {
  try {
    const response = yield call(brandService.addBrand, action.formdata);
    yield put(brandActions.addBrandSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(brandActions.addBrandFail(error.response.data.msg));
    }
    else {
      yield put(brandActions.addBrandFail(CATCH_ERROR));
    }
  }
}

export function* BrandGetSaga() {
  try {
    const response = yield call(brandService.GetBrand);
    yield put(brandActions.getBrandSuccess(response.data.data.brands));
  }
  catch (error) {
    if (error.response) {
      yield put(brandActions.getBrandFail(error.response.data.msg));
    }
    else {
      yield put(brandActions.getBrandFail(CATCH_ERROR));
    }
  }
}

export function* BrandFetchEditDataSaga(action) {
  try {
    const response = yield call(brandService.brandEditData, action.id);
    yield put(brandActions.brandFetchEditSuccess(response.data.data.brand));
  }
  catch (error) {
    if (error.response) {
      yield put(brandActions.brandFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(brandActions.brandFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* BrandEditSaga(action) {
  try {
    const response = yield call(brandService.editBrand, action.formdata);
    yield put(brandActions.editBrandSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(brandActions.editBrandFail(error.response.data.msg));
    }
    else {
      yield put(brandActions.editBrandFail(CATCH_ERROR));
    }
  }
}

export function* BrandDeleteSaga(action) {
  try {
    const response = yield call(brandService.DeleteBrand, action.id);
    yield put(brandActions.deleteBrandSuccess(response.data.msg));
    yield put(brandActions.getBrandStart());
  }
  catch (error) {
    if (error.response) {
      yield put(brandActions.deleteBrandFail(error.response.data.msg));
    }
    else {
      yield put(brandActions.deleteBrandFail(CATCH_ERROR));
    }
  }
}

export function* brandFlowWatcher() {
  yield takeLatest(brandConstants.ADD_BRAND_START, BrandAddSaga);
  yield takeLatest(brandConstants.GET_BRAND_START, BrandGetSaga);
  yield takeLatest(brandConstants.BRAND_FETCH_EDIT_START, BrandFetchEditDataSaga);
  yield takeLatest(brandConstants.BRAND_EDIT_START, BrandEditSaga);
  yield takeLatest(brandConstants.DELETE_BRAND_START, BrandDeleteSaga);
}