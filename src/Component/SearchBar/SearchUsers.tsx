import { Button, Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../../Style/Modal.css";

const SearchUsers = () => {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div>
      <button> Search User here</button>
    </div>
  );
};

export default SearchUsers;
