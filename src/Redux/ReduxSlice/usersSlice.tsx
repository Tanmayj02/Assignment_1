import { createSlice } from "@reduxjs/toolkit";

let initialState: any = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers(state, action) {
      return action.payload;
    },
    deleteSelectedUser(state, action) {
      const deleteUserId = action.payload;
      const updatedUserList = state.filter(
        (userItem: any) => userItem.id != deleteUserId
      );
      return updatedUserList;
    },
  },
});

export const { setAllUsers, deleteSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;
