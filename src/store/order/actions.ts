import { createAction } from "@reduxjs/toolkit";
import { ORDER_SET_CITY_ID,ORDER_SET_POINT_ID } from "./constants";
import type { IOderObject } from "./types";

export const orderSetCityId = createAction<IOderObject | null>(ORDER_SET_CITY_ID);
export const orderSetPointId = createAction<IOderObject | null>(ORDER_SET_POINT_ID);
