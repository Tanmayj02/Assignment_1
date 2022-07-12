import { useEffect, useMemo, useState } from "react";
import User from "./User/User";
import { Container, Row } from "react-bootstrap";
import userDetail from "./UserDetail";
import DisplayModal from "./User/UserCardComponent/CardFooter/DisplayModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteSelectedUser } from "../Redux/ReduxSlice/usersSlice";
import { editSelectedUser } from "../Redux/ReduxSlice/usersSlice";

export const HomePage = () => {
  const [show, setShow] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState<any>(null);

  const handleClose = () => setShow(false);

  function handleSaveAndClose(
    id: number,
    editedNameByUser: string,
    editedEmailByUser: string,
    editedPhoneByUser: string,
    editedWebsiteByUser: string
  ) {
    dispatch(
      editSelectedUser({
        id,
        editedNameByUser,
        editedEmailByUser,
        editedPhoneByUser,
        editedWebsiteByUser,
      })
    );
    handleClose();
  }

  const dispatch = useDispatch();

  const users: userDetail[] = useSelector((state: any) => state.users);

  const onMenuItemClicked = (item: { id: number; label: string }): void => {
    const { id, label } = item;

    if (label === "Edit User") {
      setShow(true);
      setEditingUserId(id);
    } else if (label === "Delete User") {
      dispatch(deleteSelectedUser(id));
    }
  };

  const ShowUserModal = () => {
    console.log("This is the Modal");
    const selectedUser = users.filter(
      (userItem: userDetail) => userItem.id === editingUserId
    );
    if (selectedUser.length > 0) {
      return (
        <>
          <DisplayModal
            show={show}
            handleClose={handleClose}
            handleSaveAndClose={handleSaveAndClose}
            selectedUser={selectedUser}
          />
        </>
      );
    } else {
      return;
    }
  };

  const ShowAllUsers = () => {
    return users.map((user: userDetail) => (
      <User
        key={user.id}
        userData={user}
        onMenuItemClicked={onMenuItemClicked}
      />
    ));
  };

  return (
    <Container fluid>
      <Row>
        {ShowAllUsers()}
        {ShowUserModal()}
      </Row>
    </Container>
  );
};
