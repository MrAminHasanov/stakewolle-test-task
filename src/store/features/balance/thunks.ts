import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalanceReq, getBlockReq } from "@/functions/requests";

export const getBlockThunk = createAsyncThunk(
    "balanceSlice/getBlockThink",
    async (userData, { rejectWithValue }) => {
        try {
            return await getBlockReq()
        }
        catch (error: any) {
            return rejectWithValue(error.code)
        }
    }
)
export const getBalanceThunk = createAsyncThunk(
    "balanceSlice/getBalanceThunk",
    async (
        { accId, chainBlock }: { accId: string, chainBlock: string },
        { rejectWithValue }
    ) => {
        try {
            return await getBalanceReq(accId, chainBlock)
        }
        catch (error: any) {
            return rejectWithValue(error.code)
        }
    }
)