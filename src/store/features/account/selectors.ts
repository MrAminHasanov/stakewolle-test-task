import { RootState } from "@/store/store";
import { accauntSlice } from "./stateSlice.slice";
import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state: RootState) => state[accauntSlice.name];

export const accauntStatusSelector = createSelector(rootSelector, ({ status }) => status);
export const accauntStatusMessageSelector = createSelector(rootSelector, ({ statusMessage }) => statusMessage);
export const accauntIdSelector = createSelector(rootSelector, ({ accauntId }) => accauntId);