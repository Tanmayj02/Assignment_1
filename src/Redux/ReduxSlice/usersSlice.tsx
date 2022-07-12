import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import userDetail from "../../Component/UserDetail";

const usersUrl: string = "https://jsonplaceholder.typicode.com/users";

const initialState: userDetail[] = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const allUsers = await axios.get(usersUrl);
    return allUsers.data;
  } catch (error: any) {
    return error.message;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers(userList, action) {
      return action.payload;
    },

    deleteSelectedUser(userList, action) {
      const deleteUserId = action.payload;
      const updatedUserList = userList.filter(
        (userItem: userDetail) => userItem.id != deleteUserId
      );
      return updatedUserList;
    },

    editSelectedUser(userList, action) {
      const findUserById: number = action.payload.id;
      const setUserName: string = action.payload.editedNameByUser;
      const setUserEmail: string = action.payload.editedEmailByUser;
      const setUserPhone: string = action.payload.editedPhoneByUser;
      const setUserWebsite: string = action.payload.editedWebsiteByUser;

      const updatedUserList = userList.map((user: { id: number }) => {
        if (user.id === findUserById) {
          return {
            ...user,
            name: setUserName,
            email: setUserEmail,
            phone: setUserPhone,
            website: setUserWebsite,
          };
        } else {
          return user;
        }
      });
      return updatedUserList;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setAllUsers, deleteSelectedUser, editSelectedUser } =
  usersSlice.actions;

export default usersSlice.reducer;
