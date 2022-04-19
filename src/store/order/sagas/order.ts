import { takeLatest, put, call } from "redux-saga/effects";

import { FailedRequest } from "constants/errors";
import { sendOrderData, sendOrderDataLoading, setOrderId } from "../actions";
import { requestPost } from "api/requests";
import type { IOrderData } from "../types";
import type { IAction } from "store/types";
import type { AxiosResponse } from "axios";
 
const postOrderData = (data: IOrderData) => {
    return requestPost("/db/order", data);
}

function *sendOrderDataHandler(action: IAction) {
    try {
        yield put(sendOrderDataLoading(true));

        const response: AxiosResponse = yield call(postOrderData, action.payload)

        if(response.status < 300) {
            yield put(setOrderId(response.data.data.id))
        } else {
            throw new Error(FailedRequest)
        }
    } catch (error: any) {
        console.error(error);
    }  finally {
        yield put(sendOrderDataLoading(false));
    }
}

export function *sendOrderDataToServer() {
    yield takeLatest(sendOrderData, sendOrderDataHandler)
}