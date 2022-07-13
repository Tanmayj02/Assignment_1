import { Button, Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../../Style/Modal.css";

const CardHeader = ({ name }: any) => {
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    fetch(
      `https://avatars.dicebear.com/v2/avataaars/${name}}.svg?options[mood][]=happy`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setUrl(imageObjectURL);
      });
  }, []);

  let routeToUserDetail: string = "/user/";
  routeToUserDetail = routeToUserDetail.concat(name);

  return (
    <Container fluid>
      <Card>
        <a href={routeToUserDetail}>
          <Card.Img src={url} className="imageheader" />
        </a>
      </Card>
    </Container>
  );
};

export default CardHeader;
