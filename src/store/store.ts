import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accauntSlice } from './features/account/stateSlice.slice';

const reducers = combineReducers({
    [accauntSlice.name]: accauntSlice.reducer
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;