import { createAsyncThunk } from "@reduxjs/toolkit";
import { accauntReq } from "../../../requests.ts";

export const getAccauntThunk = createAsyncThunk("accauntSlice/getAccauntThunk",
    async (userData, { rejectWithValue }) => {
        try {
            return await accauntReq();
        }
        catch (error) {
            return rejectWithValue(error.code)
        }
    }
)
