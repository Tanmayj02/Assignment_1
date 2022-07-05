import { Button, Card, Container } from "react-bootstrap";
import userDetail from "./UserDetails"

  const CardBody = ({ name, email, phone, website }: userDetail) => {
    return (
        <Container>
        <Card className="p-3">
        <Card.Title > {name} </ Card.Title>
        <Card.Text> {email} </ Card.Text>
        <Card.Text> {phone} </ Card.Text>
        <Card.Text> {website}</ Card.Text>
        </Card>
        </ Container>
    );
  };
  
  export default CardBody;
  