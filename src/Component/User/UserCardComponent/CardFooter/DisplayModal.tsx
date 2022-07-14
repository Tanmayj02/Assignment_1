import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import userDetail from "../../../UserDetail";

const DisplayModal = ({
  show,
  handleCloseModal,
  selectedUser,
  handleSaveAndCloseModal,
}: any) => {
  const currentUser: userDetail = selectedUser[0];
  const id: number = currentUser.id;
  let editedNameByUser: string = currentUser.name;
  let editedEmailByUser: string = currentUser.email;
  let editedPhoneByUser: string = currentUser.phone;
  let editedWebsiteByUser: string = currentUser.website;
  const [invalidNameText, setInvalidNameText] = useState("");
  const [invalidEmailText, setInvalidEmailText] = useState("");
  const [invalidPhoneText, setInvalidPhoneText] = useState("");
  const [invalidWebsiteText, setInvalidWebsiteText] = useState("");

  useEffect(() => {
    setInvalidNameText("");
    setInvalidEmailText("");
    setInvalidPhoneText("");
    setInvalidWebsiteText("");
  }, [show]);

  const handleEditedNameByUser = (e: any) => {
    editedNameByUser = e.target.value;
    let regex = new RegExp("[0-9]");
    if (regex.test(editedNameByUser)) {
      setInvalidNameText("User Name must not contain Number");
    } else if (editedNameByUser === "") {
      setInvalidNameText("User field cannot be Blank");
    } else {
      setInvalidNameText("");
    }
  };

  const handleEditedEmailByUser = (e: any) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    editedEmailByUser = e.target.value;
    if (editedEmailByUser === "") {
      setInvalidEmailText("Email field cannot be Blank");
    } else if (!regex.test(editedEmailByUser)) {
      setInvalidEmailText("Enter a valid Email Address");
    } else {
      setInvalidEmailText("");
    }
  };
  const handlEditedPhoneByUser = (e: any) => {
    editedPhoneByUser = e.target.value;
    if (editedPhoneByUser === "") {
      setInvalidPhoneText("Phone field cannot be Blank");
    } else {
      setInvalidPhoneText("");
    }
  };
  const handleEditedWebsiteByUser = (e: any) => {
    const regex = new RegExp("[a-z0-9]+.+[a-z0-9]");
    editedWebsiteByUser = e.target.value;
    if (editedWebsiteByUser === "") {
      setInvalidWebsiteText("Website cannot be Empty");
    } else if (!regex.test(editedWebsiteByUser)) {
      setInvalidWebsiteText("Website field cannot be Blank");
    } else {
      setInvalidWebsiteText("");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>
                    <span className="text-danger">*</span> Name
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={handleEditedNameByUser}
                    placeholder="Name"
                    defaultValue={editedNameByUser}
                  />
                </Col>
              </Row>
              <Row>
                <p className="d-flex justify-content-end text-danger mt-2">
                  {invalidNameText}
                </p>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>
                    <span className="text-danger">*</span> Email
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={handleEditedEmailByUser}
                    defaultValue={editedEmailByUser}
                  />
                </Col>
              </Row>
              <Row>
                <p className="d-flex justify-content-end text-danger mt-2">
                  {invalidEmailText}
                </p>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>
                    <span className="text-danger">*</span> Phone
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    onChange={handlEditedPhoneByUser}
                    defaultValue={editedPhoneByUser}
                  />
                </Col>
              </Row>
              <Row>
                <p className="d-flex justify-content-end text-danger mt-2">
                  {invalidPhoneText}
                </p>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>
                    <span className="text-danger">*</span> Website
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={handleEditedWebsiteByUser}
                    defaultValue={editedWebsiteByUser}
                  />
                </Col>
              </Row>
              <Row>
                <p className="d-flex justify-content-end text-danger mt-2">
                  {invalidWebsiteText}
                </p>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              handleSaveAndCloseModal(
                id,
                editedNameByUser,
                editedEmailByUser,
                editedPhoneByUser,
                editedWebsiteByUser
              )
            }
            disabled={
              invalidNameText !== "" ||
              invalidEmailText !== "" ||
              invalidPhoneText !== "" ||
              invalidWebsiteText !== ""
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DisplayModal;
