// import { useEffect, useState } from "react";
// import { Col, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// //import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import userDetail from "../../../UserDetail";
// import { Formik, Field, Form } from "formik";

// const DisplayModalFormik = ({
//   show,
//   handleCloseModal,
//   selectedUser,
//   handleSaveAndCloseModal,
// }: any) => {
//   return (
//     <>
//       <Modal show={show} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Basic Modal</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Formik
//             initialValues={{ name: "", email: "", subject: "", content: "" }}
//             onSubmit={(values, { setSubmitting }) => {
//               setTimeout(() => {
//                 alert(JSON.stringify(values, null, 2));
//                 setSubmitting(false);
//               }, 1000);
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <Field name="name" className="form-control" type="text" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <Field name="email" className="form-control" type="email" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="subject">Subject</label>
//                   <Field name="subject" className="form-control" type="text" />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="content">Content</label>
//                   <Field
//                     name="content"
//                     className="form-control"
//                     as="textarea"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Please wait..." : "Submit"}
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary">Save Changes</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

export const DisplayModalFormik = () => {};
