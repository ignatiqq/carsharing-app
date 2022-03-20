import { Reducer } from "redux";

import type { IAction } from "store/types";
import type { ICommonSettings } from "./types";
import { SET_SIDEBAR_OPEN } from "./constants";

const initialState = {
    sidebarOpen: false
}

const commonSettings: Reducer<ICommonSettings, IAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIDEBAR_OPEN:
            return {
                ...state,
                sidebarOpen: action.payload
            }
            break;
    
        default: 
            return state
            break;
    }
}

export default commonSettings;