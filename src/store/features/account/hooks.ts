import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useCallback } from "react";

import { getAccauntThunk } from "./thunks";


export const useAccauntActions = () => {
    const dispatch = useAppDispatch()

    const getAccaunt = useCallback(() => {
        dispatch(getAccauntThunk())
    }, [dispatch])

    return {
        getAccaunt
    }
}