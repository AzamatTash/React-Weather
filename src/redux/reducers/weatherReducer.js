import {createAction, createReducer} from "@reduxjs/toolkit";
import {weatherAPI} from "../../api/api";
import {getTime} from "../../assets/utils/getTime";
import {getDirectionWind} from "../../assets/utils/getDirectionWind";

export const setCurrentCity = createAction('setCurrentCity', (cityName) => {
    return {payload:{cityName}}
});

const setDataCurrentDay = createAction('setDataCurrentDay', ({...data}) => {
    return {payload:{...data}}
});

const initialState = {
    currentCity: localStorage.getItem('name') || 'москва',
    temp: null,
    feelsLike: null,
    pressure: null,
    humidity: null,
    wind: {
        direction: null,
        speed: null
    },
    description: null,
    weekDay: null,
    time: null,
    cityName: null,
    icon: null
}

export const weatherReducer = createReducer(initialState, {
    [setCurrentCity]: (state, action) => {
        localStorage.setItem('name', action.payload.cityName)
        state.currentCity = action.payload.cityName;
    },

    [setDataCurrentDay]: (state, action) => {
        state.temp = Math.round(action.payload.main.temp);
        state.feelsLike = Math.round(action.payload.main.feels_like);
        state.pressure = Math.round(action.payload.main.pressure * 0.7501);
        state.humidity = action.payload.main.humidity;
        state.wind.speed = Math.round(action.payload.wind.speed);
        state.wind.direction = getDirectionWind(action.payload.wind.deg);
        state.description = action.payload.weather[0].description
        state.time = getTime();
        state.cityName = action.payload.name;
        state.weekDay = 'Сегодня';
        state.icon = action.payload.weather[0].icon
    },
})

export const fetchWeatherCurrentDay = (cityName) => async (dispatch) => {
    const response = await weatherAPI.getWeather(cityName);
    return dispatch(setDataCurrentDay({...response.data}));
};
