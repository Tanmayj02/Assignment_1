import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import userDetail from "./UserDetails"

const BasicModal = ({ name, email, phone, website }: userDetail) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const imageurl = 'https://toppng.com/uploads/preview/free-download-pencil-chalk-png-clipart-clip-art-pencil-ico-11562901060ymmwp55mwl.png';
  return (
    <>
      {/* <Button style={{color: 'red'}} onClick={handleShow}>
        modal
      </Button> */}
      <button> <img src='https://www.pdfzorro.com/Images/IconsFunktionen/pdf-edit.webp' alt="myimage" width="20" height="10" onClick={handleShow} /></button>
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
    </>
  );
}

export default BasicModal;