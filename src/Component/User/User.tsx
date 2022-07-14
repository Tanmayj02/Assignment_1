import { Card, Container, Col } from "react-bootstrap";
import CardBody from "./UserCardComponent/CardBody";
import CardFooter from "./UserCardComponent/CardFooter/CardFooter";
import CardHeader from "./UserCardComponent/CardHeader";

const User = ({ userDetails, onMenuItemClicked }: any) => {
  const { username, id, isLiked } = userDetails;
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="gy-1 gx-0 p-3">
      <Container fluid>
        <Card>
          <CardHeader username={username} />
          <CardBody id={id} />
          <CardFooter
            id={id}
            onMenuItemClicked={onMenuItemClicked}
            isLiked={isLiked}
          />
        </Card>
      </Container>
    </Col>
  );
};

export default User;
