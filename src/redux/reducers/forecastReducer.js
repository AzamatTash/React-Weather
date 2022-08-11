import {createAction, createReducer} from "@reduxjs/toolkit";
import {weatherService} from "../../service/weatherService";

const setDataCards = createAction('setDataCards', ({...data}) => {
    return {payload:{...data}}
});

const initialState = {
    list: [],
};

export const forecastReducer = createReducer(initialState, {
    [setDataCards]: (state, action) => {
        state.list = action.payload.list;
    },
})

export const fetchForecast = (cityName) => async (dispatch) => {
    const response = await weatherService.getForecast(cityName);
    dispatch(setDataCards({...response.data}));
};