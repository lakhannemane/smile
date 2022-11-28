import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slice";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
