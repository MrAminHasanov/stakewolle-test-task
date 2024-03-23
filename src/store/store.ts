import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accauntSlice } from './features/account/stateSlice.slice';
import { chainSlice } from './features/chain/stateSlice.slice';
import { balanceSlice } from './features/balance';

const reducers = combineReducers({
    [accauntSlice.name]: accauntSlice.reducer,
    [chainSlice.name]: chainSlice.reducer,
    [balanceSlice.name]: balanceSlice.reducer
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;