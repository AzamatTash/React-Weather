import {storage} from "../../storage/storage";
import {createAction, createReducer} from "@reduxjs/toolkit";

export const setCurrentCity = createAction('setCurrentCity', (cityName) => {
    return {payload:{cityName}}
});

export const setCurrentTheme = createAction('setCurrentTheme', (theme) => {
    return {payload:{theme}}
});

const initialState = {
    currentCity: storage.getItem('city') || 'москва',
    currentTheme: storage.getItem('theme') || 'light'
}

export const initializationReducer = createReducer(initialState, {
    [setCurrentCity]: (state, action) => {
        state.currentCity = action.payload.cityName;
    },
    [setCurrentTheme]: (state, action) => {
        state.currentTheme = action.payload.theme;
    }
})
