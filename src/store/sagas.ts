import { all } from "redux-saga/effects";

import { getCitiesWatcher } from "./location/sagas/cities/getCities";
import { getPointsWatcher } from "./location/sagas/points/getPoints";
import { getCarsDataWatcher } from "./order/sagas/cars";
import { getRatesWatcher } from "./order/sagas/rates";

export default function* rootSaga() {
    yield all([
        getCitiesWatcher(),
        getPointsWatcher(),
        getCarsDataWatcher(),
        getRatesWatcher()
    ])
}