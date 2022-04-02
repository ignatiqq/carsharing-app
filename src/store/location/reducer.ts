import type { ICities, ICurrentCity } from "./cities/types";
import type { IPoints } from "./points/types";
import { setAllCities, setCurrentCity, setAllCitiesLoading, setAllCitiesLoadingError } from "./cities/actions";
import { setPoints, setPointsRequestError } from "./points/actions";

import { createReducer } from '@reduxjs/toolkit'

interface ILocationReducer extends ICities, IPoints {}

const initialState: ILocationReducer = {
    cities: {
        current: null,
        all: {
            data: null,
            isLoading: false,
            error: null
        },
    },
    points: {
      data: null,
      error: null
    }
    
}

const location = createReducer(initialState, (builder) => {
  builder
    .addCase(setAllCities, (state, action) => {
      state.cities.all = {
          data: action.payload as Array<ICurrentCity>,
          isLoading: false,
          error: null
      }
    })
    .addCase(setCurrentCity, (state, action) => {
      state.cities.current = action.payload
    })
    .addCase(setAllCitiesLoading, (state, action) => {
      state.cities.all.isLoading = action.payload
    })
    .addCase(setAllCitiesLoadingError, (state,action) => {
        state.cities.all = {
            data: null,
            isLoading: false,
            error: action.payload

        }
    })
    .addCase(setPoints, (state, action) => {
      state.points = {
        data: action.payload,
        error: null
      }
    })
    .addCase(setPointsRequestError, (state,action) => {
      state.points = {
        data: null,
        error: action.payload
      }
    })
})

export default location;