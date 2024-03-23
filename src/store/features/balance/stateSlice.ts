import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./types";
import { getBalanceThunk, getBlockThunk } from "./thunks";

const initialState: initialStateType = {
    chainBalance: "",
    status: "init"
};

const balanceSlice = createSlice({
    name: "balanceSlice",
    initialState,
    reducers: {
        setStatus: (state, { payload }) => {
            state.status = payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                getBlockThunk.pending,
                (state) => {
                    state.status = "loading";
                }
            )
            .addCase(
                getBalanceThunk.fulfilled,
                (state, { payload }) => {
                    state.chainBalance = payload;
                    state.status = "success";
                }
            )
})

export const { actions, name, reducer } = balanceSlice