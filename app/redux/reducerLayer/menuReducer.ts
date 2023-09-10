"use client";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  open: boolean;
}

const initialState: State = {
  open: false,
};

const menuReducer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenuStatusAction(state) {
      state.open = !state.open;
    },
  },
});

export const { handleMenuStatusAction } = menuReducer.actions;

export default menuReducer.reducer;
