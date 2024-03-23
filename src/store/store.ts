import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { name as accountSlice, reducer as accountReducer } from './features/account/stateSlice';
import { name as chainSlice, reducer as chainReducer } from './features/chain/stateSlice';
import { name as balanceSlice, reducer as balanceReducer } from './features/balance/stateSlice';

const reducers = combineReducers({
    [accountSlice]: accountReducer,
    [chainSlice]: chainReducer,
    [balanceSlice]: balanceReducer
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;