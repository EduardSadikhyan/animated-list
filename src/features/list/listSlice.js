import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.unshift(payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
