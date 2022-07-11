import { Button, Card, Col, Container, Row } from "react-bootstrap";
import userDetail from "../../../UserDetails";
import "../../../../Style/Modal.css";
import { useState } from "react";
import reportWebVitals from "../../../../reportWebVitals";

const CardFooter = ({ id, onMenuItemClicked, menuItems }: any): any => {
  const [isLiked, setIsLiked] = useState<boolean>(true);

  return (
    <div className="d-flex justify-content-around">
      {menuItems.map((item: any) => {
        // if (item.label != "Like User") {
        //   return (
        //     <img
        //       onClick={() => {
        //         onMenuItemClicked({ id, ...item });
        //       }}
        //       className="imagefooter"
        //       src={item.icon}
        //     ></img>
        //   );
        // } else {
        //   return (
        //     <img
        //       onClick={() => {
        //         setIsLiked((prevState) => !prevState);
        //       }}
        //       className="imagefooter"
        //       src={isLiked ? item.icon.like : item.icon.dislike}
        //     ></img>
        //   );
        // }

        switch (item.label) {
          case "Edit USer":
          case "Delete User":
            return (
              <img
                onClick={() => {
                  onMenuItemClicked({ id, ...item });
                }}
                className="imagefooter"
                src={item.icon}
              ></img>
            );
            break;
          case "Like User":
            return (
              <img
                onClick={() => {
                  setIsLiked((prevState) => !prevState);
                }}
                className="imagefooter"
                src={isLiked ? item.icon.like : item.icon.dislike}
              ></img>
            );
            break;
          default:
            return <> This is Invalid Input</>;
        }
      })}
    </div>
  );
};

export default CardFooter;
