import {storage} from '../../storage/storage';
import {createAction, createReducer} from '@reduxjs/toolkit';

export const setCurrentCity = createAction('setCurrentCity', (cityName) => {
    return {payload:{cityName}}
});

export const setCurrentTheme = createAction('setCurrentTheme', (theme) => {
    return {payload:{theme}}
});

const initialState = {
    currentCity: {
        lon: null,
        lat: null
    },
    currentTheme: storage.getItem('theme') || 'dark'
};

export const initializationReducer = createReducer(initialState, {
    [setCurrentCity]: (state, action) => {
        state.currentCity.lat = action.payload.cityName[0].lat;
        state.currentCity.lon = action.payload.cityName[0].lon;
    },
    [setCurrentTheme]: (state, action) => {
        state.currentTheme = action.payload.theme;
    }
});
