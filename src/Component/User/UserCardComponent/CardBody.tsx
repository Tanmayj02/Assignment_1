import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import userDetail from "../../UserDetail";

const CardBody = ({ id }: { id: number }) => {
  const users: userDetail[] = useSelector((state: any) => state.users);

  const filterUserDetails = users.filter((user: any) => {
    if (user.id === id) {
      return user;
    }
  });

  const { name, email, phone, website } = filterUserDetails[0];

  return (
    <Container>
      <Card className="container content-justify p-2 ">
        <Row>
          <Col xs={1} md={1} lg={1}></Col>
          <Col>
            <Card.Title> {name} </Card.Title>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center p-1">
          <Col lg={1}></Col>
          <Col className="justify-content-center" xs={2} md={2} lg={2}>
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </Col>
          <Col className="d-flex justify-content-start m-0">
            <Card.Text> {email} </Card.Text>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center p-1">
          <Col lg={1}></Col>
          <Col className="justify-content-center" xs={2} md={2} lg={2}>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          </Col>
          <Col>
            <Card.Text> {phone} </Card.Text>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center p-1  ">
          <Col lg={1}></Col>
          <Col className="justify-content-center" xs={2} md={2} lg={2}>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          </Col>
          <Col>
            <Card.Text> {website}</Card.Text>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CardBody;
