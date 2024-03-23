import { useAppDispatch } from "@/hooks/reduxHooks";
import { useCallback } from "react";

import { getAccauntThunk } from "./thunks";
import { actions } from "./stateSlice.slice";

export const useAccauntActions = () => {
    const dispatch = useAppDispatch()

    const updateAccaunt = useCallback(() => {
        dispatch(actions.setStatus("init"))
    }, [dispatch])

    const getAccaunt = useCallback(() => {
        dispatch(getAccauntThunk())
    }, [dispatch])

    return {
        getAccaunt,
        updateAccaunt
    }
}