import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {weatherReducer} from "./reducers/weatherReducer";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
});

export const store = configureStore({
    reducer: {weatherReducer},
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

