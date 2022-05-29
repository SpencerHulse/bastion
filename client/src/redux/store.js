import { configureStore } from "@reduxjs/toolkit";
import mainMenuReducer from "./features/mainMenuSlice";

export const store = configureStore({
  reducer: {
    mainMenu: mainMenuReducer,
  },
});
