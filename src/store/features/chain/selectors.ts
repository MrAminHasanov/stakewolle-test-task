import { RootState } from "@/store/store";
import { name as sliceName } from "./stateSlice";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state: RootState) => state[sliceName];

export const activeChainSelector = createSelector(rootSelector, ({ activeChain }) => activeChain);
export const activeChainStatusSelector = createSelector(rootSelector, ({ status }) => status);