import { createSlice } from "@reduxjs/toolkit";
const useSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearUser(state, action) {
      return []
    },
  },
});
console.log(useSlice.actions);
export default useSlice.reducer;
export const { addUser, removeUser, clearUser } = useSlice.actions;
