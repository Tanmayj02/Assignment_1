import { Card, Container, Col } from "react-bootstrap";
import CardBody from "./UserCardComponent/CardBody";
import CardFooter from "./UserCardComponent/CardFooter/CardFooter";
import CardHeader from "./UserCardComponent/CardHeader";

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
