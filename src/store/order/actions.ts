import { createAction } from "@reduxjs/toolkit";
import { ORDER_SET_CITY_ID,ORDER_SET_POINT_ID, SET_ORDER_DATA } from "./constants";
import type { IOderObject, IOrder } from "./types";

export const orderSetCityId = createAction<IOderObject | null>(ORDER_SET_CITY_ID);
export const orderSetPointId = createAction<IOderObject | null>(ORDER_SET_POINT_ID);
export const setOrderData = createAction<IOrder>(SET_ORDER_DATA);
