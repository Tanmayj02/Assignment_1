import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BasicModal from "./BasicModal";
import DeleteUser from "./DeleteUser";
import userDetail from "./UserDetails";

let MenuItems = [
  { label: "Like User", icon: "" },
  { label: "Edit USer", icon: "" },
  { label: "Delete User", icon: "" },
];

const CardFooter = ({ id, onMenuItemClicked }: any) => {
  return (
    // <Container fluid>
    //   <Card className="p-1">
    //     <Row>
    //       <Col>Footer1</Col>
    //       <Col>
    //         <BasicModal
    //           name={name}
    //           email={email}
    //           phone={phone}
    //           website={website}
    //         />
    //       </Col>
    //       <Col>
    //         <DeleteUser
    //           name={name}
    //           email={email}
    //           phone={phone}
    //           website={website}
    //         />
    //       </Col>
    //     </Row>
    //   </Card>
    // </Container>
    <div className="d-flex justify-content-around">
      {/* <div
        className="p-2 col-example text-center"
        style={{ backgroundColor: "black" }}
      >
        Footer1
      </div>
      <div className="p-2 col-example text-center">
        <BasicModal name={name} email={email} phone={phone} website={website} />
      </div>
      <div className="p-2 col-example text-center">
        <DeleteUser name={name} email={email} phone={phone} website={website} />
      </div> */}
      {MenuItems.map((item) => {
        return (
          <button
            onClick={() => {
              onMenuItemClicked({ id, ...item });
            }}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default CardFooter;
