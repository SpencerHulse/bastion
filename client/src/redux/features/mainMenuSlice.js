import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "MainMenu",
};

const mainMenuSlice = createSlice({
  name: "mainMenu",
  initialState,
  reducers: {
    changeScreen: (state, action) => {
      state.screen = action.payload.newScreen;
    },
  },
});

export const { changeScreen } = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
