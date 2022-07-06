import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "../CSS/User.css";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import userDetail from "./UserDetails";

const User = ({ userData, onMenuItemClicked }: any) => {
  const { name, email, phone, website, id } = userData;
  return (
    <Col xs={6} md={4} lg={3} className="gy-1 gx-0 p-3">
      <Container fluid>
        <Card>
          <CardHeader name={name} />
          <CardBody name={name} email={email} phone={phone} website={website} />
          <CardFooter id={id} onMenuItemClicked={onMenuItemClicked} />
        </Card>
      </Container>
    </Col>
  );
};

export default User;
