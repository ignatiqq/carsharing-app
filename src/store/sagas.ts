import { all } from "redux-saga/effects";

import { getCitiesWatcher } from "./cities/sagas/getCitiesSaga";

export default function* rootSaga() {
    yield all([
        getCitiesWatcher()
    ])
}