import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {thisDayReducer} from "./Reducers/thisDayReducer";

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
});

export const store = configureStore({
    reducer: {thisDayReducer},
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});

