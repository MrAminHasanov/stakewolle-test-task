import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "./types";

import { getAccauntThunk } from "./thunks";


const initialState: initialStateType = {
    status: "init",
    statusMessage: "loading",
    accauntId: ""
};

const accauntSlice = createSlice({
    name: "accauntSlice",
    initialState,
    reducers: {
        setStatus(state, { payload }) {
            state.status = payload
        }
    },
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
                (state: initialStateType, { payload }) => {
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

export const { actions, reducer, name } = accauntSlice; 