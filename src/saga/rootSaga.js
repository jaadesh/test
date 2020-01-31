import { fork, all } from "redux-saga/effects";

import { authFlowWatcher } from "./authSaga";
import { menuFlowWatcher } from "./menuSaga";
import { subCatFlowWatcher } from "./subCatSaga";
import { leadTypeFlowWatcher } from "./leadTypeSaga";
import { SizePitchFlowWatcher } from "./sizePitchSaga";
import { brandFlowWatcher } from "./brandSaga";
import { seriesFlowWatcher } from "./seriesSaga";
import { userFlowWatcher } from "./userSaga";
import { valueFlowWatcher } from "./valueSaga";
import { rackFlowWatcher } from "./rackSaga";
import { productFlowWatcher } from "./productSaga";
import { purchaseEntryFlowWatcher } from "./purchaseEntrySaga";
import { quotationFlowWatcher } from "./quotationSaga";

export default function* rootSaga() {
  yield all([
    fork(authFlowWatcher),
    fork(menuFlowWatcher),
    fork(subCatFlowWatcher),
    fork(leadTypeFlowWatcher),
    fork(SizePitchFlowWatcher),
    fork(brandFlowWatcher),
    fork(seriesFlowWatcher),
    fork(userFlowWatcher),
    fork(valueFlowWatcher),
    fork(rackFlowWatcher),
    fork(productFlowWatcher),
    fork(purchaseEntryFlowWatcher),
    fork(quotationFlowWatcher),
  ]);
}