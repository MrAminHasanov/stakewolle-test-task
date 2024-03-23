import { chainInfo } from '@/constants/chainsConst';
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useCallback } from "react";

import { actions } from "./stateSlice";
import { addChainThunk, getActiveChainIdThunk, switchChainThunk } from './thunks';

export const useChainActions = () => {
    const dispatch = useAppDispatch()

    const updateChain = useCallback(() => {
        dispatch(actions.setStatus("update"))
    }, [dispatch])

    const switchChainNetwork = useCallback(async (newActiveChainInfo: chainInfo) => {
        try {
            await dispatch(
                switchChainThunk(newActiveChainInfo.chainId)
            ).unwrap();
        } catch (error: any) {
            if (error === 4902) {
                await dispatch(
                    addChainThunk(newActiveChainInfo)
                )
            }
        }
    }, [dispatch]);

    const getActualChainId = useCallback(async () => {
        await dispatch(getActiveChainIdThunk());
    }, [dispatch])

    return {
        getActualChainId,
        switchChainNetwork,
        updateChain
    }
}