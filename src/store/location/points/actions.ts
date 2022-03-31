import { GET_POINTS, SET_POINTS, SET_POINTS_REQUEST_ERROR} from "./constants";
import { createAction } from "@reduxjs/toolkit";
import type { ICurrentPoint } from "./types";

export const setPoints = createAction<Array<ICurrentPoint>>(SET_POINTS)
export const setPointsRequestError = createAction<string>(SET_POINTS_REQUEST_ERROR)
export const getPoints = createAction(GET_POINTS);