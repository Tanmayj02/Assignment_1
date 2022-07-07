const deleteUser = (id: any) => {
  return {
    type: "DELETE",
    payload: {
      id,
    },
  };
};

export default deleteUser;
