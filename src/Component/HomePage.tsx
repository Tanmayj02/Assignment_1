import { useState } from "react";
import User from "./User/User";
import { Container, Row } from "react-bootstrap";
import userDetail from "./UserDetail";
import DisplayModal from "./User/UserCardComponent/CardFooter/DisplayModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteSelectedUser,
  toggleisLiked,
} from "../Redux/ReduxSlice/usersSlice";
import { editSelectedUser } from "../Redux/ReduxSlice/usersSlice";

export const HomePage = () => {
  const [show, setShow] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState<number>(-1);
  const [userNameToSearch, setUserNameToSearch] = useState<string>("");
  const dispatch = useDispatch();

  // Modal

  const handleCloseModal = () => setShow(false);

  function handleSaveAndCloseModal(
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
    handleCloseModal();
  }

  const ShowUserModal = () => {
    const selectedUser = users.filter(
      (userItem: userDetail) => userItem.id === editingUserId
    );
    if (selectedUser.length > 0) {
      return (
        <>
          <DisplayModal
            show={show}
            handleCloseModal={handleCloseModal}
            handleSaveAndCloseModal={handleSaveAndCloseModal}
            selectedUser={selectedUser}
          />
        </>
      );
    } else {
      return;
    }
  };

  // Card Footer Functionality

  const users: userDetail[] = useSelector((state: any) => state.users);

  const onMenuItemClicked = (label: string, id: number) => {
    if (label === "Edit User") {
      setShow(true);
      setEditingUserId(id);
    } else if (label === "Delete User") {
      dispatch(deleteSelectedUser(id));
    } else {
      dispatch(toggleisLiked({ id }));
    }
  };

  // Render All Users

  const ShowAllUsers = () => {
    const filteredUserList = users.filter(
      (userItem: userDetail) => userItem.isDeleted !== true
    );

    return filteredUserList.map((user: userDetail) =>
      userNameToSearch === "" ||
      user.name.toLowerCase().includes(userNameToSearch.toLowerCase()) ? (
        <User
          key={user.id}
          userDetails={user}
          onMenuItemClicked={onMenuItemClicked}
        />
      ) : null
    );
  };

  // Search Bar

  const SearchBar = () => {
    return (
      <>
        <Row className="d-inline-flex">
          <input
            type="search"
            onChange={(e) => setUserNameToSearch(e.target.value)}
            className="form-control rounded"
            placeholder="Search User"
            style={{ width: 345, height: 25 }}
          />
        </Row>
      </>
    );
  };

  return (
    <Container fluid>
      <Row>
        {SearchBar()}
        {ShowAllUsers()}
        {ShowUserModal()}
      </Row>
    </Container>
  );
};
