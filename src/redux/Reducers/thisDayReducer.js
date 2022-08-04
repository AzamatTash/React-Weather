import {createAction, createReducer} from "@reduxjs/toolkit";
import {weatherAPI} from "../../api/api";
import {convertTime} from "../../assets/utils/convertTime";

const SET_DATA_CURRENT_DAY = createAction('SET_DATA_CURRENT_DAY', (main, dt, name) => {
    return {
        payload:{main, dt, name}
    }
});

const initialState = {
    temp: null,
    weekDay: null,
    time: null,
    cityName: null
}

export const thisDayReducer = createReducer(initialState, {
    [SET_DATA_CURRENT_DAY]: (state, action) => {
        state.temp = Math.round(action.payload.main.temp);
        state.time = convertTime(action.payload.dt);
        state.cityName = action.payload.name;
        state.weekDay = 'Сегодня';
    }
})

export const fetchWeatherCurrentDay = (cityName) => async (dispatch) => {
    const response = await weatherAPI.getWeather(cityName);
    const {main, dt, name} = response.data;
    return dispatch(SET_DATA_CURRENT_DAY(main, dt, name));
}