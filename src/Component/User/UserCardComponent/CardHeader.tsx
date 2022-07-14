import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../../Style/Modal.css";

const CardHeader = ({ username }: any) => {
  const [userImageUrl, setUserImageUrl] = useState<string>("");
  useEffect(() => {
    fetch(
      `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageURL = URL.createObjectURL(imageBlob);
        setUserImageUrl(imageURL);
      });
  }, []);

  let routeToUserDetails: string = "";
  routeToUserDetails = routeToUserDetails.concat("/user/", username);

  return (
    <Container fluid>
      <Card>
        <a href={routeToUserDetails}>
          <Card.Img src={userImageUrl} className="imageheader" />
        </a>
      </Card>
    </Container>
  );
};

export default CardHeader;
