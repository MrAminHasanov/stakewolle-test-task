import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./types";
import { addChainThunk, getActiveChainIdThunk, switchChainThunk } from "./thunks";

const initialState: initialStateType = {
    activeChain: "",
    status: "init",
};

const chainSlice = createSlice({
    name: "chainSlice",
    initialState,
    reducers: {
        setStatus: (state, { payload }) => {
            state.status = payload;
        }
    }, extraReducers: builder =>
        builder
            .addCase(
                switchChainThunk.pending,
                (state) => {
                    state.status = "loading";
                }
            )
            .addCase(
                getActiveChainIdThunk.pending,
                (state) => {
                    state.status = "loading";
                }
            )
            .addCase(
                switchChainThunk.fulfilled,
                (state) => {
                    state.status = "success";
                }
            )
            .addCase(
                addChainThunk.fulfilled,
                (state) => {
                    state.status = "success";
                }
            )
            .addCase(
                getActiveChainIdThunk.fulfilled,
                (state, { payload }) => {
                    state.activeChain = payload
                    state.status = "success";
                }
            )
})

export const { actions, reducer, name } = chainSlice