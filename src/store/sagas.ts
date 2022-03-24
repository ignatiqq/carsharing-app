import { all } from "redux-saga/effects";

import { getCitiesWatcher } from "./commonSettings/sagas/citiesSagas/getCitiesSaga";

export default function* rootSaga() {
    yield all([
        getCitiesWatcher()
    ])
}