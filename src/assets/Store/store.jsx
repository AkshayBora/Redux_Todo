import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// windows:
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
