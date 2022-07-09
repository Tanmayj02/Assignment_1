import Image from "react-bootstrap/Image";
import { Button, Card, Container } from "react-bootstrap";
import userDetail from "../../UserDetails";
import { useEffect, useState } from "react";

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

  return (
    <Container fluid>
      <Card>
        <Card.Img
          src={url}
          style={{
            backgroundColor: "#eeeee4",
          }}
        />
      </Card>
    </Container>
  );
};

export default CardHeader;
