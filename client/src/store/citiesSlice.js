import { createSlice } from "@reduxjs/toolkit";
import data from "../data/countriesAndCities.json"

const initialState = {
    cities: [],
    isLoading: true,
};

export const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        getCities: (state, action) => {
            state.cities = data[action.payload.country]
        }
    }
});

export const { getCities } = citiesSlice.actions
export default citiesSlice.reducer;
