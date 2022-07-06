//import axios from 'axios';
import { ComponentFactory, useEffect, useState } from "react";
import User from "./User";
import "../CSS/FetchProfile.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import UserInformation from "./UserInformation";
import Modal from "./DisplayModal";
import DisplayModal from "./DisplayModal";
import DeleteUser from "./DeleteUser";

function getUsers(): Promise<UserInformation[]> {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

export const HomePage = () => {
  const [users, setUsers] = useState<UserInformation[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState<any>(null);

  useEffect(() => {
    getUsers().then((usersData) => {
      setUsers(usersData);
    });
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const onMenuItemClicked = (item: any): any => {
    // alert("Item Clicked" + JSON.stringify(item));
    const { id, label } = item;
    if (label === "Edit USer") {
      setShow(true);
      setEditingUserId(id);
      console.log(id);
    } else if (label === "Like User") {
    } else if (label === "Delete User") {
      console.log(id);
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
          console.log(users);
          let usersCopy = [...users];
          usersCopy.splice(i, 1);
          setUsers(usersCopy);
        }
      }
    }
  };

  // const DeleteUser = ({ id }: any) => {
  //   console.log(id);
  //   for (var i = 0; i < users.length; i++) {
  //     if (users[i].id == 1) {
  //       console.log(users);
  //       users.splice(i, 1);
  //       console.log(users);
  //     }
  //   }
  // };
  const renderModal = () => {
    const selectedUser = users.filter(
      (userItem: UserInformation) => userItem.id === editingUserId
    );

    return (
      <Modal
        isVisible={show}
        title="{selectedUser.name}"
        handleClose={handleClose}
      >
        {JSON.stringify(selectedUser)}
      </Modal>
    );
    // return (
    //   <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       {JSON.stringify(
    //         users.filter(
    //           (userItem: PersonProf) => userItem.id === editingUserId
    //         )
    //       )}
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //       <Button variant="primary" onClick={handleClose}>
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // );
  };

  const renderAllUsers = () => {
    return users.map((userItem) => (
      <User
        key={userItem.id}
        userData={userItem}
        onMenuItemClicked={onMenuItemClicked}
      />
    ));
  };

  return (
    <Container fluid>
      <Row>
        {renderAllUsers()}
        {renderModal()}
      </Row>
    </Container>
  );
};
