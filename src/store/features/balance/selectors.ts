import { RootState } from "@/store/store";
import { name as sliceName } from "./stateSlice";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state: RootState) => state[sliceName];

export const balanceSelector = createSelector(rootSelector, ({ chainBalance }) => chainBalance);
export const balanceStatusSelector = createSelector(rootSelector, ({ status }) => status);