import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BasicModal from "./BasicModal";
import DeleteUser from "./DeleteUser";
import userDetail from "./UserDetails"
  
  const CardFooter = ({ name, email, phone, website }: userDetail) => {
    return (
        <Container fluid>
        <Card className="p-1">
            <Row>
            <Col>
        Footer1 
        </Col>
        <Col >
        <BasicModal  name={name} email={email} phone={phone} website={website} />
        </Col >
        <Col > 
        <DeleteUser name={name} email={email} phone={phone} website={website} /> 
        </Col>
        </Row>
        </Card>
        </ Container>
    );
  };
  
  export default CardFooter;
  