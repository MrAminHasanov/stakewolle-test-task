import { RootState } from "@/store/store";
import { balanceSlice } from "./stateSlice.slice";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state: RootState) => state[balanceSlice.name];

export const balanceSelector = createSelector(rootSelector, ({ chainBalance }) => chainBalance);
export const balanceStatusSelector = createSelector(rootSelector, ({ status }) => status);