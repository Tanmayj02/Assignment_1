import { Button, Card, Col, Container, Row } from "react-bootstrap";
import userDetail from "../../../UserDetails";
import "../../../../Style/Modal.css";
import { useState } from "react";

const CardFooter = ({ id, onMenuItemClicked, menuItems }: any): any => {
  const [isLiked, setIsLiked] = useState<boolean>(true);

  return (
    <div>
      {menuItems.map((item: any) => {
        if (item.label != "Like User") {
          return (
            <img
              onClick={() => {
                onMenuItemClicked({ id, ...item });
              }}
              className="imagefooter"
              src={item.icon}
            ></img>
          );
        } else {
          return (
            <img
              onClick={() => {
                setIsLiked((prevState) => !prevState);
              }}
              className="imagefooter"
              src={isLiked ? item.icon.like : item.icon.dislike}
            ></img>
          );
        }
      })}
    </div>
  );
};

export default CardFooter;
