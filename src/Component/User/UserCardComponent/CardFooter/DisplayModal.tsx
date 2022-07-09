import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import UserInformation from "../../../UserInformation";

const DisplayModal = ({
  show,
  handleClose,
  selectedUser,
  handleSaveAndClose,
}: any) => {
  const currentUser: UserInformation = selectedUser[0];
  let id: any = currentUser.id;
  let editedNameByUser: string = currentUser.name;
  let editedEmailByUser: string = currentUser.email;
  let editedPhoneByUser: string = currentUser.phone;
  let editedWebsiteByUser: string = currentUser.website;

  const handleEditedNameByUser = (e: any) => {
    editedNameByUser = e.target.value;
  };
  const handleEditedEmailByUser = (e: any) => {
    editedEmailByUser = e.target.value;
  };
  const handlEditedPhoneByUser = (e: any) => {
    editedPhoneByUser = e.target.value;
  };
  const handleEditedWebsiteByUser = (e: any) => {
    editedWebsiteByUser = e.target.value;
  };

  const handleSaveChanges = () => {
    handleSaveAndClose(
      id,
      editedNameByUser,
      editedEmailByUser,
      editedPhoneByUser,
      editedWebsiteByUser
    );
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={handleEditedNameByUser}
                    placeholder="Name"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleEditedEmailByUser}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Phone</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    onChange={handlEditedPhoneByUser}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Website</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={handleEditedWebsiteByUser}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DisplayModal;
