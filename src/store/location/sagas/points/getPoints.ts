import { takeLatest, call, put } from "redux-saga/effects"

import type { IGetPointsResponse } from "./types";
import { setPoints, setPointsRequestError, getPoints } from "../../points/actions";
import { AxiosResponse } from "axios";
import { requestGet } from "api/requests";

const getPointsRequest = () => {
    return requestGet("db/point")
}

function *getAllPoints() {
    try {
        const response: AxiosResponse<IGetPointsResponse> = yield call(getPointsRequest);
        
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