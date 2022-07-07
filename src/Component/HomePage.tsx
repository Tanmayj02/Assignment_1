//import axios from 'axios';
import { ComponentFactory, useEffect, useState } from "react";
import User from "./User";
import "../CSS/FetchProfile.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import UserInformation from "./UserInformation";
import DisplayModal from "./DisplayModal";
import { useDispatch } from "react-redux";
import deleteUser from "../Redux/Actions/actions";
import { setAllUser } from "../Redux/Actions/actions";
import store from "../Redux/Store/Store";
import { useSelector } from "react-redux";

function getUsersFromApi(): Promise<UserInformation[]> {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

const likeUserImageUrl: string =
  "https://www.creativefabrica.com/wp-content/uploads/2020/03/09/Like-icon-vector-Graphics-3481777-1-1-580x386.jpg";
const dislikeUserImageUrl: string =
  "data:image/png;base64,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";
const editUserImageUrl =
  "data:image/png;base64,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";
const deleteUserImageUrl =
  "data:image/png;base64,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";

export const HomePage = () => {
  //const [users, setUsers] = useState<UserInformation[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState<any>(null);
  const [likeDislike, setLikeDislike] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getUsersFromApi().then((users) => {
      //setUsers(usersData);
      dispatch(setAllUser(users));
    });
  }, []);

  let MenuItems: { label: string; icon: string }[] = [
    {
      label: "Like User",
      icon: likeDislike ? likeUserImageUrl : dislikeUserImageUrl,
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

  const onMenuItemClicked = (item: { id: number; label: string }): any => {
    const { id, label } = item;

    if (label === "Edit USer") {
      setShow(true);
      setEditingUserId(id);
      console.log(id);
    } else if (label === "Like User") {
      setLikeDislike(!likeDislike);
    } else if (label === "Delete User") {
      dispatch(deleteUser(id));
    }
  };

  const ShowUserModal = () => {
    const users: any = JSON.parse(
      JSON.stringify(useSelector((state: any) => state.users))
    );
    const selectedUser = users.filter(
      (userItem: UserInformation) => userItem.id === editingUserId
    );
    return (
      <>
        <DisplayModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          person={selectedUser}
        />
      </>
    );
  };

  const ShowAllUsers = () => {
    const users: UserInformation[] = JSON.parse(
      JSON.stringify(useSelector((state: any) => state.users))
    );
    // console.log("This is temp" + JSON.parse(JSON.stringify(temp)));
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
