import { combineReducers } from "redux";

import location from "./location/reducer";
import order from "./order/reducer";

export const rootReducer = combineReducers({
    location,
    order
});