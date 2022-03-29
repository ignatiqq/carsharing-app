import type { ICities, ICurrentCity } from "./types";
import { setAllCities, setCurrentCity, setAllCitiesLoading, setAllCitiesLoadingError } from "./actions";

import { createReducer } from '@reduxjs/toolkit'

const initialState: ICities = {
    city: {
        current: null,
        all: {
            data: null,
            isLoading: false,
            error: null
        },
    }
}

const cities = createReducer(initialState, (builder) => {
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
})

export default cities;