import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialStateType } from "./types";

import { getAccauntThunk } from "./thunks";


const initialState: initialStateType = {
    status: "startLoading",
    statusMessage: "",
    accauntId: null
};

export const accauntSlice = createSlice({
    name: "accauntSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                getAccauntThunk.pending,
                (state: initialStateType) => {
                    state.status = "loading";
                    state.statusMessage = "loading";
                }
            )
            .addCase(
                getAccauntThunk.fulfilled,
                (state: initialStateType, { payload }: PayloadAction<string[]>) => {
                    state.accauntId = payload[0];
                    state.status = "succsess";
                }
            )
            .addCase(
                getAccauntThunk.rejected,
                (state: initialStateType, { payload: errorCode }) => {
                    if (errorCode === -32002) {
                        state.statusMessage = "Please finish signin up to continue";
                        state.status = "loading";
                    } else {
                        state.statusMessage = `${errorCode}`;
                        state.status = "error";
                    }
                }
            )
    }
})
