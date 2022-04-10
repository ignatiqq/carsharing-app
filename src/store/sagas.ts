import { all } from "redux-saga/effects";

import { getCitiesWatcher } from "./location/sagas/cities/getCities";
import { getPointsWatcher } from "./location/sagas/points/getPoints";
import { getCarsDataWatcher } from "./order/sagas/cars";

export default function* rootSaga() {
    yield all([
        getCitiesWatcher(),
        getPointsWatcher(),
        getCarsDataWatcher()
    ])
}