import { createSlice } from "@reduxjs/toolkit";

const hamBtnSlice = createSlice({
  name: "hamBtn",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleHam: (state) => {
      state.isOpen = !state.isOpen;
    },
    openHam: (state) => {
      state.isOpen = true;
    },
    closeHam: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleHam, openHam, closeHam } = hamBtnSlice.actions;

export default hamBtnSlice.reducer;
