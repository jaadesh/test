import { call, put, takeLatest } from 'redux-saga/effects';

import * as menuConstants from '../store/constants/menuConstants';
import * as menuActions from '../store/actions/menuAction';
import * as menuService from '../service/menuService';
import { CATCH_ERROR } from '../config/config';

export function* FetchMenuSaga() {
  try {
    const response = yield call(menuService.FetchMenu);
    yield put(menuActions.fetchMenuSuccess(response.data.data.pages));
  }
  catch (error) {
    if (error.response) {
      yield put(menuActions.fetchMenuFail(error.response.data.msg));
    }
    else {
      yield put(menuActions.fetchMenuFail(CATCH_ERROR));
    }
  }
}

export function* menuFlowWatcher() {
  yield takeLatest(menuConstants.FETCH_MENU_START, FetchMenuSaga);
}