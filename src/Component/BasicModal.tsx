import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import userDetail from "./UserDetails";
import "../CSS/Modal.css";

const BasicModal = ({ name, email, phone, website }: userDetail) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageurl =
    "https://toppng.com/uploads/preview/free-download-pencil-chalk-png-clipart-clip-art-pencil-ico-11562901060ymmwp55mwl.png";
  return (
    <div className="container">
      {/* <Button style={{color: 'red'}} onClick={handleShow}>
        modal
      </Button> */}
      {/* <button
        className="btn btn-sm btn-primary"
        style={{
          height: 20,
          width: 50,
          backgroundColor: "white",
          border: 0,
        }}
      > */}
      <img
        src="data:image/png;base64,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"
        alt="myimage"
        className="imagefooter"
        onClick={handleShow}
      />
      {/* </button> */}
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
                    placeholder="Name"
                    value={name}
                    autoFocus
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
                    value={email}
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Phone</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Phone Number"
                    value={phone}
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Website</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Website"
                    value={website}
                    autoFocus
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BasicModal;
