import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import userDetail from "../../../UserDetail";

const DisplayModal = ({
  show,
  handleClose,
  selectedUser,
  handleSaveAndClose,
}: any) => {
  const currentUser: userDetail = selectedUser[0];
  const id: number = currentUser.id;
  let editedNameByUser: string = currentUser.name;
  let editedEmailByUser: string = currentUser.email;
  let editedPhoneByUser: string = currentUser.phone;
  let editedWebsiteByUser: string = currentUser.website;
  const [validateUserName, setValidateUserName] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [validatePhone, setValidatePhone] = useState("");
  const [validateWebsite, setValidateWebsite] = useState("");

  useEffect(() => {
    setValidateUserName("");
    setValidateEmail("");
    setValidatePhone("");
    setValidateWebsite("");
  }, [show]);

  const handleEditedNameByUser = (e: any) => {
    editedNameByUser = e.target.value;
    let regex = new RegExp("[0-9]");
    if (regex.test(editedNameByUser)) {
      setValidateUserName("User Name must not contain Number");
    } else if (editedNameByUser === "") {
      setValidateUserName("User name cannot be Empty");
    } else {
      setValidateUserName("");
    }
  };

  const handleEditedEmailByUser = (e: any) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    editedEmailByUser = e.target.value;
    if (editedEmailByUser === "") {
      setValidateEmail("Email cannot be Empty");
    } else if (!regex.test(editedEmailByUser)) {
      setValidateEmail("Enter a valid Email Address");
    } else {
      setValidateEmail("");
    }
  };
  const handlEditedPhoneByUser = (e: any) => {
    editedPhoneByUser = e.target.value;
    if (editedPhoneByUser === "") {
      setValidatePhone("Phone Number cannot be empty");
    } else {
      setValidatePhone("");
    }
  };
  const handleEditedWebsiteByUser = (e: any) => {
    const regex = new RegExp("[a-z0-9]+.+[a-z0-9]");
    editedWebsiteByUser = e.target.value;
    if (editedWebsiteByUser === "") {
      setValidateWebsite("Website cannot be Empty");
    } else if (!regex.test(editedWebsiteByUser)) {
      setValidateWebsite("Enter a valid website name");
    } else {
      setValidateWebsite("");
    }
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
                  <Form.Label>
                    <span className="text-danger">*</span> Name
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={(e) => handleEditedNameByUser(e)}
                    placeholder="Name"
                    defaultValue={editedNameByUser}
                  />
                </Col>
              </Row>
              <Row>
                <p className="d-flex justify-content-end text-danger mt-2">
                  {validateUserName}
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
                    placeholder="name@example.com"
                    onChange={handleEditedEmailByUser}
                    defaultValue={editedEmailByUser}
                  />
                </Col>
              </Row>
              <Row>
                <p className="d-flex justify-content-end text-danger mt-2">
                  {validateEmail}
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
                  {validatePhone}
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
                  {validateWebsite}
                </p>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSaveChanges}
            disabled={
              validateUserName !== "" ||
              validateEmail !== "" ||
              validatePhone !== "" ||
              validateWebsite !== ""
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
