import { call, put, takeLatest } from 'redux-saga/effects';

import * as purchaseEntryConstants from '../store/constants/purchaseEntryConstants';
import * as purchaseEntryActions from '../store/actions/purchaseEntryAction';
import * as purchaseEntryService from '../service/purchaseEntryService';
import { CATCH_ERROR } from '../config/config';


export function* PurchaseEntryListSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryList, action.level);
    yield put(purchaseEntryActions.purchaseEntryListSuccess(response.data.data.purchaseEntryList));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryListFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryListFail(CATCH_ERROR));
    }
  }
}

export function* purchaseEntryProductListSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryProductList, action.id);
    yield put(purchaseEntryActions.purchaseEntryProductListSuccess(response.data.data.purchaseEntryList));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryProductListFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryProductListFail(CATCH_ERROR));
    }
  }
}

// export function* purchaseEntryAddSaga(action) {
//   try {
//     const response = yield call(purchaseEntryService.addpurchaseEntry, action.formdata);
//     yield put(purchaseEntryActions.purchaseEntryAddSuccess(response.data.msg));
//   }
//   catch (error) {
//     if (error.response) {
//       yield put(purchaseEntryActions.purchaseEntryAddFail(error.response.data.msg));
//     }
//     else {
//       yield put(purchaseEntryActions.purchaseEntryAddFail(CATCH_ERROR));
//     }
//   }
// }

export function* purchaseEntryFetchEditDataSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryEditData, action);
    yield put(purchaseEntryActions.purchaseEntryFetchEditSuccess(response.data.data.purchaseEntryList));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryFetchEditFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryFetchEditFail(CATCH_ERROR));
    }
  }
}

export function* purchaseEntryEditSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryEdit, action.formdata);
    yield put(purchaseEntryActions.purchaseEntryEditSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryEditFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryEditFail(CATCH_ERROR));
    }
  }
}

// export function* purchaseEntryDeleteSaga(action) {
//   try {
//     const response = yield call(purchaseEntryService.deletepurchaseEntry, action.id);
//     yield put(purchaseEntryActions.purchaseEntryDeleteSuccess(response.data.msg));
//     yield put(purchaseEntryActions.purchaseEntryListStart());
//   }
//   catch (error) {
//     if (error.response) {
//       yield put(purchaseEntryActions.purchaseEntryDeleteFail(error.response.data.msg));
//     }
//     else {
//       yield put(purchaseEntryActions.purchaseEntryDeleteFail(CATCH_ERROR));
//     }
//   }
// }

export function* purchaseEntryChangeFinalStatusSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryChangeFinalStatus, action.id);
    yield put(purchaseEntryActions.purchaseEntryChangeFinalStatusSuccess(response.data.msg));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryChangeFinalStatusFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryChangeFinalStatusFail(CATCH_ERROR));
    }
  }
}

export function* PurchaseEntryPriceFetchSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryPriceFetch);
    yield put(purchaseEntryActions.purchaseEntryPriceFetchSuccess(response.data.data.pricingDetails));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryPriceFetchFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryPriceFetchFail(CATCH_ERROR));
    }
  }
}

export function* PurchaseEntryMasterListFetchSaga(action) {
  try {
    const response = yield call(purchaseEntryService.purchaseEntryMasterListFetch);
    yield put(purchaseEntryActions.purchaseEntryMasterListFetchSuccess(response.data.data));
  }
  catch (error) {
    if (error.response) {
      yield put(purchaseEntryActions.purchaseEntryMasterListFetchFail(error.response.data.msg));
    }
    else {
      yield put(purchaseEntryActions.purchaseEntryMasterListFetchFail(CATCH_ERROR));
    }
  }
}


export function* purchaseEntryFlowWatcher() {
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_LIST_START, PurchaseEntryListSaga);
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_PRODUCT_LIST_START, purchaseEntryProductListSaga);
  // yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_DELETE_START, PurchaseEntryDeleteSaga);
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_CHANGE_FINAL_STATUS_START, purchaseEntryChangeFinalStatusSaga);
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_FETCH_EDIT_START,purchaseEntryFetchEditDataSaga);
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_PRICE_FETCH_START,PurchaseEntryPriceFetchSaga);
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_MASTER_LIST_FETCH_START,PurchaseEntryMasterListFetchSaga);
  yield takeLatest(purchaseEntryConstants.PURCHASE_ENTRY_EDIT_START, purchaseEntryEditSaga);
}