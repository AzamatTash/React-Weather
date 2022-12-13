import {createAction, createReducer} from '@reduxjs/toolkit';
import {weatherService} from '../../service/weatherService';

const setDataCards = createAction('setDataCards', ({...data}) => {
    return {payload:{...data}};
});

const initialState = {
    list: [],
};

export const forecastReducer = createReducer(initialState, {
    [setDataCards]: (state, action) => {
        const list = [];
        for(let i = 0; i < 6; i++) {
            list.push(action.payload.list[i])
        }
        state.list = list;
    },
});

export const fetchForecast = (lat, lon) => async (dispatch) => {
    const response = await weatherService.getForecast(lat, lon);
    dispatch(setDataCards({...response.data}));
};