import { createSlice } from "@reduxjs/toolkit";
const useSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});
console.log(useSlice.actions);
export default useSlice.reducer;
export const {addUser}=useSlice.actions;