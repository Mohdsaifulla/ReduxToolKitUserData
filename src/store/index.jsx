import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/useSlice";
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
export default store;
