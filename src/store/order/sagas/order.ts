import { takeLatest, put, call } from "redux-saga/effects";

import { FailedRequest, orderNonExistentId } from "constants/errors";
import { 
    sendOrderData, 
    sendOrderDataLoading, 
    setOrderId, 
    getOrderDataById, 
    getOrderDataLoading,
    setOrderDataById,
    getOrderDataError
} from "../actions";
import { requestGet, requestPost } from "api/requests";
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

const getOrderDataByIdRequest = (id: string) => {
    return requestGet(`/db/order/${id}`);
}

function *getOrderDataByIdHandler(action: IAction) {
    try {
        yield put(getOrderDataLoading(true))

        const response: AxiosResponse = yield call(getOrderDataByIdRequest, action.payload);

        if(response.status < 300) {
            yield put(setOrderDataById(response.data.data))
        } else {
            throw new Error(orderNonExistentId);    
        }

    } catch (error: any) {
        console.error(error.message);
        yield put(getOrderDataError(orderNonExistentId))
    } finally {
        yield put(getOrderDataLoading(false))
    }
}

export function *getOrderDataByIdWatcher() {
    yield takeLatest(getOrderDataById, getOrderDataByIdHandler)
}