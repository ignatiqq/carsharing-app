import type { Reducer } from "redux";
import type { IAction } from "store/types";
import type { ICommonSettings } from "./types";
import { SET_CURRENT_CITY, SET_ALL_CITIES, SET_ALL_CITIES_LOADING, SET_ALL_CITIES_LOADING_ERROR } from "./constants";

const initialState: ICommonSettings = {
    city: {
        current: null,
        all: {
            data: null,
            isLoading: false,
            error: null
        },
    }
}

const commonSettings: Reducer<ICommonSettings, IAction> = (state = initialState, action): ICommonSettings => {
    switch(action.type) {

        case SET_CURRENT_CITY: {
            return {
                ...state,
                city: {
                    ...state.city,
                    current: action.payload
                }
            }
        }

        case SET_ALL_CITIES: {
            return {
                ...state,
                city: {
                    ...state.city,
                    all: {
                        data: action.payload,
                        isLoading: false,
                        error: null
                    },
                }
            }
        }

        case SET_ALL_CITIES_LOADING: {
            return {
                ...state,
                city: {
                    ...state.city,
                    all: {
                        ...state.city.all,
                        isLoading: action.payload
                    }
                }
            }
        }

        case SET_ALL_CITIES_LOADING_ERROR: {
            return {
                ...state,
                city: {
                    ...state.city,
                    all: {
                        data: null,
                        isLoading: false,
                        error: action.payload
                    }
                }
            }
        }

        default: return state
    }
};

export default commonSettings;