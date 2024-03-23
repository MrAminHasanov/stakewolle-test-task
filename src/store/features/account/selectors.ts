import { RootState } from "@/store/store";
import { name as sliceName } from "./stateSlice";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state: RootState) => state[sliceName];

export const accauntStatusSelector = createSelector(rootSelector, ({ status }) => status);
export const accauntStatusMessageSelector = createSelector(rootSelector, ({ statusMessage }) => statusMessage);
export const accauntIdSelector = createSelector(rootSelector, ({ accauntId }) => accauntId);