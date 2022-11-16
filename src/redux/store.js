import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {weatherReducer} from './reducers/weatherReducer';
import {forecastReducer} from './reducers/forecastReducer';
import {initializationReducer} from './reducers/initializationReducer';

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
});

export const store = configureStore({
    reducer: {weatherReducer, forecastReducer, initializationReducer},
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

