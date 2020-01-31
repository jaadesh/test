import { call, put, takeLatest } from 'redux-saga/effects';

import * as seriesConstants from '../store/constants/seriesConstants';
import * as seriesActions from '../store/actions/seriesAction';
import * as seriesService from '../service/seriesService';
import { CATCH_ERROR } from '../config/config';


export function* SeriesListSaga() {
  try {
    const response = yield call(seriesService.seriesList);
    yield put(seriesActions.seriesListSuccess(response.data.data.series));
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.seriesListFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.seriesListFail(CATCH_ERROR));
    }
  }
}

export function* SeriesGetSubcatFromCatSaga(action) {
  try {
    const response = yield call(seriesService.getSubcatFromCat, action.catname);
    yield put(seriesActions.getSubcatFromCatSuccess(response.data.data.subcategories));
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.getSubcatFromCatFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.getSubcatFromCatFail(CATCH_ERROR));
    }
  }
}


export function* SeriesAddSaga(action) {
  try {
    const response = yield call(seriesService.addSeries, action.formdata);
    yield put(seriesActions.seriesAddSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.seriesAddFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.seriesAddFail(CATCH_ERROR));
    }
  }
}

export function* SeriesFetchEditDataSaga(action) {
  try {
    const response = yield call(seriesService.seriesEditData, action.id);
    const seriesData = response.data.data.seriesData
    seriesData.seriesBasePath = response.data.data.seriesBasePath
    yield put(seriesActions.seriesFetchEditSuccess(seriesData));
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.seriesFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.seriesFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* SeriesEditSaga(action) {
  try {
    const response = yield call(seriesService.seriesEdit, action.formdata);
    yield put(seriesActions.seriesEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.seriesEditFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.seriesEditFail(CATCH_ERROR));
    }
  }
}

export function* SeriesDeleteSaga(action) {
  try {
    const response = yield call(seriesService.deleteSeries, action.id);
    yield put(seriesActions.seriesDeleteSuccess(response.data.msg));
    yield put(seriesActions.seriesListStart());
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.seriesDeleteFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.seriesDeleteFail(CATCH_ERROR));
    }
  }
}


export function* SeriesFetchFromCatSaga(action) {
  try {
    const response = yield call(seriesService.seriesFetchFromCategory, action.catName, action.subcatId);
    yield put(seriesActions.seriesFetchFromCategorySuccess(response.data.data.seriesmasters));
  }
  catch (error) {
    if (error.response) {
      yield put(seriesActions.seriesFetchFromCategoryFail(error.response.data.msg));
    }
    else {
      yield put(seriesActions.seriesFetchFromCategoryFail(CATCH_ERROR));
    }
  }
}


export function* seriesFlowWatcher() {
  yield takeLatest(seriesConstants.SERIES_LIST_START, SeriesListSaga);
  yield takeLatest(seriesConstants.GET_SUBCAT_FROM_CAT_START, SeriesGetSubcatFromCatSaga);
  yield takeLatest(seriesConstants.SERIES_ADD_START, SeriesAddSaga);
  yield takeLatest(seriesConstants.SERIES_DELETE_START, SeriesDeleteSaga);
  yield takeLatest(seriesConstants.SERIES_FETCH_EDIT_START, SeriesFetchEditDataSaga);
  yield takeLatest(seriesConstants.SERIES_EDIT_START, SeriesEditSaga);
  yield takeLatest(seriesConstants.SERIES_FETCH_FROM_CATEGORY_START, SeriesFetchFromCatSaga);
}