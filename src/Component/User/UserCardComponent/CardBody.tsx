import { Button, Card, Container, Row, Col } from "react-bootstrap";
import userDetail from "../../UserDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhone,
  faMessage,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const CardBody = ({ name, email, phone, website }: userDetail) => {
  return (
    <Container>
      <Card className="container p-1 content-justify p-2 ">
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Card.Title> {name} </Card.Title>
          </Col>
        </Row>
        {/* <div className="d-flex justify-content-start">
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          <Card.Text > {email} </Card.Text>
        </div>*/}
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
