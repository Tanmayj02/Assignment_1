//import axios from 'axios';
import { ComponentFactory, useEffect, useState } from "react";
import User from "./User";
import "../CSS/FetchProfile.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import PersonProf from "./PersonProf";

function getUsers(): Promise<PersonProf[]> {
  // For now, consider the data is stored on a static `users.json` file
  return (
    fetch("https://jsonplaceholder.typicode.com/users")
      // the JSON body is taken from the response
      .then((res) => res.json())
  );
}

export const FetchProfiles = () => {
  const [users, setUsers] = useState<PersonProf[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState(null);

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
    }
  };
  const renderModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {JSON.stringify(
            users.filter(
              (userItem: PersonProf) => userItem.id === editingUserId
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
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
