import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {weatherReducer} from "./reducers/weatherReducer";
import {forecastReducer} from "./reducers/forecastReducer";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
});

export const store = configureStore({
    reducer: {weatherReducer, forecastReducer},
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

