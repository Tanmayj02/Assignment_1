import UserInformation from "../../Component/UserInformation";

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
