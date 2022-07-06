//import axios from 'axios';
import { ComponentFactory, useEffect, useState } from "react";
import User from "./User";
import "../CSS/FetchProfile.css";
import { Col, Container, Row } from "react-bootstrap";
import PersonProf from "./PersonProf";

function getUsers(): Promise<PersonProf[]> {
  // For now, consider the data is stored on a static `users.json` file
  return (
    fetch("https://jsonplaceholder.typicode.com/users")
      // the JSON body is taken from the response
      .then((res) => res.json())
  );
}

export const FetchProfiles = () => {
  const [users, setUsers] = useState<PersonProf[]>([]);

  useEffect(() => {
    getUsers().then((usersData) => {
      setUsers(usersData);
    });
  }, []);

  const onMenuItemClicked = (item: any): any => {
    alert("Item Clicked" + JSON.stringify(item));
  };

  return (
    <Container fluid>
      <Row>
        {users.map((userItem) => (
          <Col xs={6} md={4} lg={3} className="gy-1 gx-0 p-3">
            <User
              key={userItem.id}
              userData={userItem}
              onMenuItemClicked={onMenuItemClicked}
            />
          </Col>
        ))}
        {/* <User key={users[0].name} name={users[0].name} email={users[0].email} phone={users[0].phone} website={users[0].website} /> */}
      </Row>
    </Container>
  );
};
