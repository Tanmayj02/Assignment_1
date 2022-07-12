import UserInformation from "../../Component/UserDetail";

const deleteUser = (id: any) => {
  return {
    type: "DELETE",
    payload: {
      id,
    },
  };
};

export default deleteUser;

export const setAllUser = (users: UserInformation[]) => {
  return {
    type: "SET USER",
    payload: {
      users,
    },
  };
};

export const editUser = ({
  id,
  editedNameByUser,
  editedEmailByUser,
  editedPhoneByUser,
  editedWebsiteByUser,
}: any) => {
  return {
    type: "EDIT USER",
    payload: {
      id,
      editedNameByUser,
      editedEmailByUser,
      editedPhoneByUser,
      editedWebsiteByUser,
    },
  };
};
