import Image from 'react-bootstrap/Image'
import { Button, Card, Container } from "react-bootstrap";
import userDetail from "./UserDetails"

const CardHeader = ({ name, email, phone, website }: userDetail) => {
  var url: string = "https://avatars.dicebear.com/v2/avataaars/";
  url = url.concat(name, ".svg?options[mood][]=happy");
  return (
     <Container fluid>
      <Card>
      <Card.Img src={url} style={{
        backgroundColor: '#eeeee4'
      }}/>
      </Card>
    </ Container>
  );
};

export default CardHeader;
