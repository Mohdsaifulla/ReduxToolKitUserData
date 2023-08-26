import { configureStore } from "@reduxjs/toolkit";
import useSlice from "./slices/useSlice";
const store = configureStore({
  reducer: {
    users: useSlice,
  },
});
export default store;
 