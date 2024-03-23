import { createAsyncThunk } from "@reduxjs/toolkit";
import { switchChainReq, addChainReq, getActiveChainIdReq } from "@/functions/requests";
import { chainInfo } from "@/constants/chainsConst";

export const addChainThunk = createAsyncThunk(
    "chainSlice/addChainThunk",
    async (userData: chainInfo, { rejectWithValue }) => {
        try {
            return await addChainReq(userData)
        }
        catch (error: any) {
            return rejectWithValue(error.code)
        }
    }
)

export const switchChainThunk = createAsyncThunk(
    "chainSlice/switchChainThunk",
    async (userData: string, { rejectWithValue }) => {
        try {
            return await switchChainReq(userData);
        }
        catch (error: any) {
            return rejectWithValue(error.code)
        }
    }
)

export const getActiveChainIdThunk = createAsyncThunk(
    "chainSlice/getActiveChainIdThunk",
    async (userData, { rejectWithValue }) => {
        try {
            return await getActiveChainIdReq();
        }
        catch (error: any) {
            return rejectWithValue(error.code)
        }
    }
)