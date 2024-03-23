import { useAppDispatch } from "@/hooks/reduxHooks";
import { useCallback } from "react";

import { getBalanceThunk, getBlockThunk } from './thunks';
import { actions } from "./stateSlice.slice";

export const useBalanceActions = () => {
    const dispatch = useAppDispatch()

    const updateBalance = useCallback(() => {
        dispatch(actions.setStatus("update"))
    }, [dispatch])

    const getBalance = useCallback(async (accId: string) => {
        const chainBlock = await dispatch(getBlockThunk()).unwrap();
        dispatch(getBalanceThunk({ accId, chainBlock }));
    }, [])

    return {
        getBalance,
        updateBalance
    }
}