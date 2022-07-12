import UserInformation from "../../Component/UserDetail";

let defaultUserListData: UserInformation[] = [];

//[object][object]
type reduxStoreStateType = UserInformation[];

const initState: reduxStoreStateType = defaultUserListData;

export const userListReducer = (
  userListState: reduxStoreStateType = initState,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET USER":
      return payload.users;
    case "LIKE":
      return userListState;
    case "EDIT USER":
      // edit the array element with payloads
      return userListState;

    case "DELETE":
      const deleteUserId = payload.id;
      const updatedUserList = userListState.filter(
        (userItem) => userItem.id != deleteUserId
      );
      console.log(updatedUserList);
      return updatedUserList;
    default:
      return userListState;
  }
};
