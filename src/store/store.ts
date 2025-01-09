import { configureStore } from "@reduxjs/toolkit";
import { componentsSlice } from "./compontentsSlice";

export const store = configureStore({
  reducer: {
    components: componentsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
