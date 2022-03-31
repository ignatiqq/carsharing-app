import type { ICities, ICurrentCity } from "./cities/types";
import type { IPoints, ICurrentPoint } from "./points/types";
import { setAllCities, setCurrentCity, setAllCitiesLoading, setAllCitiesLoadingError } from "./cities/actions";
import { setPoints, setPointsRequestError } from "./points/actions";

import { createReducer } from '@reduxjs/toolkit'

interface ILocationReducer extends ICities, IPoints {}

const initialState: ILocationReducer = {
    city: {
        current: null,
        all: {
            data: null,
            isLoading: false,
            error: null
        },
    },
    point: {
      data: null,
      error: null
    }
    
}

const location = createReducer(initialState, (builder) => {
  builder
    .addCase(setAllCities, (state, action) => {
      state.city.all = {
          data: action.payload as Array<ICurrentCity>,
          isLoading: false,
          error: null
      }
    })
    .addCase(setCurrentCity, (state, action) => {
      state.city.current = action.payload
    })
    .addCase(setAllCitiesLoading, (state, action) => {
      state.city.all.isLoading = action.payload
    })
    .addCase(setAllCitiesLoadingError, (state,action) => {
        state.city.all = {
            data: null,
            isLoading: false,
            error: action.payload

        }
    })
    .addCase(setPoints, (state, action) => {
      state.point = {
        data: action.payload,
        error: null
      }
    })
    .addCase(setPointsRequestError, (state,action) => {
      state.point = {
        data: null,
        error: action.payload
      }
    })
})

export default location;