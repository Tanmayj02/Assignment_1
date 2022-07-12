import { useEffect, useMemo, useState } from "react";
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
  const [editingUserId, setEditingUserId] = useState<any>(null);
  const [userNameToSearch, setUserNameToSearch] = useState<string>("");
  // let userInput: string = "";
  // const setUserInput = (userValue: string) => {
  //   userInput = userValue;
  // };

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

  const onMenuItemClicked = (label: string, id: number) => {
    const operation: string = label;
    console.log("On Menu Clicked" + label + operation + id);
    if (label === "Edit User") {
      setShow(true);
      setEditingUserId(id);
    } else if (label === "Delete User") {
      dispatch(deleteSelectedUser(id));
    } else if (label === "Like User") {
      console.log("Like User");
      dispatch(toggleisLiked({ id }));
    } else {
      setShow(true);
      setEditingUserId(id);
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
    // return users.map((user: userDetail) => (
    //   <User
    //     key={user.id}
    //     userData={user}
    //     onMenuItemClicked={onMenuItemClicked}
    //   />
    // ));
    const updatedUserList = users.filter(
      (userItem: userDetail) => userItem.isDeleted !== true
    );

    // if (userInput === "") {
    //   return updatedUserList.map((user: userDetail) => (
    //     <User
    //       key={user.id}
    //       userData={user}
    //       onMenuItemClicked={onMenuItemClicked}
    //     />
    //   ));
    // } else {
    //   return updatedUserList.map((user: userDetail) =>
    //     user.name.toLowerCase().includes(userInput.toLowerCase()) ? (
    //       <User
    //         key={user.id}
    //         userData={user}
    //         onMenuItemClicked={onMenuItemClicked}
    //       />
    //     ) : null
    //   );
    // }

    return updatedUserList.map((user: userDetail) =>
      userNameToSearch === "" ||
      user.name.toLowerCase().includes(userNameToSearch.toLowerCase()) ? (
        <User
          key={user.id}
          userData={user}
          onMenuItemClicked={onMenuItemClicked}
        />
      ) : null
    );
  };

  const SearchBar = () => {
    return (
      <input
        type="text"
        placeholder="Search Users"
        onChange={(e) => setUserNameToSearch(e.target.value)}
      />
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
