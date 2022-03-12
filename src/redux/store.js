import { configureStore } from "@reduxjs/toolkit";
import memorySlice from "./memorySlice";

export const store = configureStore({
  reducer: {
    memory: memorySlice,
  },
});
