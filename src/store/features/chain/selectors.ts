import { RootState } from "@/store/store";
import { chainSlice } from "./stateSlice.slice";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state: RootState) => state[chainSlice.name];

export const activeChainSelector = createSelector(rootSelector, ({ activeChain }) => activeChain);
export const activeChainStatusSelector = createSelector(rootSelector, ({ status }) => status);