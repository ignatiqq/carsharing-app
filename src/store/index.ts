import { combineReducers } from "redux";

import commonSettings from "./commonSettings/reducers";

const rootReducer = combineReducers({
    commonSettings
});

export default rootReducer;