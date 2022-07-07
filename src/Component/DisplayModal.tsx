import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// const DisplayModal = ({
//   isVisible,
//   handleClose,
//   onSubmit,
//   title,
//   children,
// }: any) => {
//   const handleSubmit = () => {
//     onSubmit && onSubmit();
//     handleClose && handleClose();
//   };

//   return (
//     <Modal show={isVisible} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{children}</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSubmit}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default DisplayModal;

const DisplayModal = ({ show, handleShow, handleClose, person }: any) => {
  //const [fname, setName] = useState<any>(users[0].name);
  // const [email, setEmail] = useState<any>(users[0].email);
  // const [website, setWebsite] = useState<any>(users[0].website);
  // const [phone, setPhone] = useState<any>(users[0].phone);
  console.log(person);
  //const [name, setName] = useState<any>(person.name);
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
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Email</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Phone</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Phone Number" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col>
                  <Form.Label>Website</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Website" />
                </Col>
              </Row>
            </Form.Group>
          </Form>
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
    </>
  );
};

export default DisplayModal;
