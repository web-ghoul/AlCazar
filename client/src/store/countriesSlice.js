import { createSlice } from "@reduxjs/toolkit";
import data from "../data/countriesAndCities.json"

const initialState = {
    countries: [],
    isLoading: true,
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        getCountries: (state) => {
            state.countries = Object.keys(data)
        }
    }
});

export const { getCountries } = countriesSlice.actions
export default countriesSlice.reducer;
