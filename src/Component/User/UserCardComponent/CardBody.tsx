import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";

const CardBody = ({ name, email, phone, website }: any) => {
  return (
    <Container>
      <Card className="container content-justify p-2 ">
        <Row>
          {/* <Col xs={1} md={1} lg={1}></Col> */}
          <Col>
            <Card.Title> {name}</Card.Title>
          </Col>
        </Row>
        <Row className="d-flex p-1">
          {/* <Col xs={1} md={1} lg={1}></Col> */}
          <Col className="justify-content-right" xs={2} sm={2} md={2} lg={1}>
            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          </Col>
          <Col className="d-flex justify-content-left m-0">
            <Card.Text> {email} </Card.Text>
          </Col>
        </Row>
        <Row className="d-flex p-1">
          {/* <Col lg={1}></Col> */}
          <Col className="justify-content-right" xs={2} sm={2} md={2} lg={1}>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          </Col>
          <Col className="d-flex justify-content-left m-0">
            <Card.Text> {phone} </Card.Text>
          </Col>
        </Row>
        <Row className="d-flex p-1  ">
          {/* <Col lg={1}></Col> */}
          <Col className="justify-content-right" xs={2} sm={2} md={2} lg={1}>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
          </Col>
          <Col className="d-flex justify-content-left m-0">
            <Card.Text> {website}</Card.Text>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default memo(CardBody);
