//import axios from 'axios';
import { useEffect, useState } from "react";
import User from "./User/User";
import "../Style/FetchProfile.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import UserInformation from "./UserInformation";
import DisplayModal from "./User/UserCardComponent/CardFooter/DisplayModal";
import { useDispatch } from "react-redux";
import deleteUser from "../Redux/Actions/actions";
import { setAllUsers } from "../Redux/ReduxSlice/usersSlice";
import store from "../Redux/Store/Store";
import { useSelector } from "react-redux";
import { deleteSelectedUser } from "../Redux/ReduxSlice/usersSlice";
import { editSelectedUser } from "../Redux/ReduxSlice/usersSlice";

// function getUsersFromApi(): Promise<UserInformation[]> {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
// }

const likeUserImageUrl: string =
  "https://media.istockphoto.com/vectors/editable-stroke-black-heart-line-icon-isolated-on-a-white-background-vector-id1204388520?k=20&m=1204388520&s=612x612&w=0&h=hgZuOxUdztgZNG9ryyYFYEgaq-tIjBe3TabgLttHD4E=";
const dislikeUserImageUrl: string =
  "https://media.istockphoto.com/vectors/heart-shape-vector-id936563406?k=20&m=936563406&s=612x612&w=0&h=Tkb2tgRrx6ytD3mCh9efAvnwKFmhLckLfmseRXzEdGg=";

const editUserImageUrl: string =
  "https://media.istockphoto.com/vectors/sign-up-icon-isolated-on-white-background-vector-illustration-vector-id1193039142?k=20&m=1193039142&s=612x612&w=0&h=e53ulqLdsZowR7K4kuoI8OoVwi8IbPff1CKHKNPmGBw=";
const deleteUserImageUrl: string =
  "https://media.istockphoto.com/vectors/garbage-bin-sign-vector-id1139466631?k=20&m=1139466631&s=612x612&w=0&h=F3hOMYdQTDn4NFEi94i9StIbDxJ1v7mX79lDxz1cXLk=";

const MenuItems: { label: string; icon: any }[] = [
  {
    label: "Like User",
    icon: { like: likeUserImageUrl, dislike: dislikeUserImageUrl },
  },
  {
    label: "Edit USer",
    icon: editUserImageUrl,
  },
  {
    label: "Delete User",
    icon: deleteUserImageUrl,
  },
];

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

  // useEffect(() => {
  //   getUsersFromApi().then((users) => {
  //     //setUsers(usersData);
  //     dispatch(setAllUsers(users));
  //   });
  // }, []);

  const onMenuItemClicked = (item: { id: number; label: string }): any => {
    const { id, label } = item;

    if (label === "Edit USer") {
      setShow(true);
      setEditingUserId(id);
    } else if (label === "Delete User") {
      dispatch(deleteSelectedUser(id));
    }
  };

  const ShowUserModal = () => {
    const users: any = useSelector((state: any) => state.users);
    const selectedUser = users.filter(
      (userItem: UserInformation) => userItem.id === editingUserId
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
    const users: UserInformation[] = useSelector((state: any) => state.users);

    return users.map((user: UserInformation) => (
      <User
        key={user.id}
        userData={user}
        menuItems={MenuItems}
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
