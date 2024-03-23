import { createAsyncThunk } from "@reduxjs/toolkit";
import { accauntReq } from "@/functions/requests";

export const getAccauntThunk = createAsyncThunk(
    "accauntSlice/getAccauntThunk",
    async (userData, { rejectWithValue }) => {
        try {
            return await accauntReq();
        }
        catch (error: any) {
            return rejectWithValue(error.code)
        }
    }
)