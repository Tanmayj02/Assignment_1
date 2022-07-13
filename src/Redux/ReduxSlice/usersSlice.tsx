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

const usersSlice: any = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleisLiked(userList, action) {
      console.log("here");
      const findUserById: number = action.payload.id;
      console.log(findUserById);

      const updatedUserList = userList.map((user: any) => {
        if (user.id === findUserById) {
          const likeStatus = user.isLiked;
          console.log(likeStatus);
          return {
            ...user,
            isLiked: !likeStatus,
          };
        } else {
          return user;
        }
      });
      return updatedUserList;
    },

    deleteSelectedUser(userList, action) {
      // const deleteUserId = action.payload;
      // const updatedUserList = userList.filter(
      //   (userItem: userDetail) => userItem.id != deleteUserId
      // );
      // return updatedUserList;
      const deleteUserId = action.payload;
      const updatedUserList = userList.map((user: any) => {
        if (user.id === deleteUserId) {
          return {
            ...user,
            isDeleted: true,
          };
        } else {
          return user;
        }
      });

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
      const currentUsers: userDetail[] = action.payload;
      const updatedUserList = currentUsers.map((user: any) => {
        return {
          ...user,
          isLiked: false,
          isDeleted: false,
        };
      });
      return updatedUserList;
    });
  },
});

export const { deleteSelectedUser, editSelectedUser, toggleisLiked } =
  usersSlice.actions;

export default usersSlice.reducer;
