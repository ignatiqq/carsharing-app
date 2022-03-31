import { takeLatest, call, put } from "redux-saga/effects"

import type { IGetPointsResponse } from "./types";
import { PointsService } from "api/services";
import { setPoints, setPointsRequestError, getPoints } from "../../points/actions";
import { AxiosResponse } from "axios";

function *getAllPoints() {
    try {
        const response: AxiosResponse<IGetPointsResponse> = yield call(PointsService.getPoint);
        
        if(response && response.data) {
            yield put(setPoints(response.data.data));
        } else {
            throw new Error("Request failed try later"); 
        }

    } catch (error: any) {
        console.error(error);
        yield put(setPointsRequestError(error.message));   
    }
}


export function *getPointsWatcher() {
    yield takeLatest(getPoints, getAllPoints)
}