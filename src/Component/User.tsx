import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "../CSS/User.css";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import userDetail from "./UserDetails";

const User = ({ userData, onMenuItemClicked }: any) => {
  const { name, email, phone, website, id } = userData;
  return (
    // <Container className="bg-secondary" >
    //   <Row>
    //   <Col xs={12} md={4} lg={3} >
    <Container fluid>
      <Card>
        <CardHeader name={name} email={email} phone={phone} website={website} />
        <CardBody name={name} email={email} phone={phone} website={website} />
        <CardFooter id={id} onMenuItemClicked={onMenuItemClicked} />
      </Card>
    </Container>
  );
};

export default User;
