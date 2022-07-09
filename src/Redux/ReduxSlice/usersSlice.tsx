import { createSlice } from "@reduxjs/toolkit";

let initialState: any = [];

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
        (userItem: any) => userItem.id != deleteUserId
      );
      return updatedUserList;
    },

    editSelectedUser(userList, action) {
      let findUserById: number = action.payload.id;
      let setUserName: string = action.payload.editedNameByUser;
      let setUserEmail: string = action.payload.editedEmailByUser;
      let setUserPhone: string = action.payload.editedPhoneByUser;
      let setUserWebsite: string = action.payload.editedWebsiteByUser;

      const updatedUserList = userList.map((user: { id: any }) => {
        if (user.id == findUserById) {
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
});

export const { setAllUsers, deleteSelectedUser, editSelectedUser } =
  usersSlice.actions;

export default usersSlice.reducer;
