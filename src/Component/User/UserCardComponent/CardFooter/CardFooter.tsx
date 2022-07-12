import "../../../../Style/Modal.css";
import { useState } from "react";
import { menuItems } from "./MenuList";

const CardFooter = ({ id, onMenuItemClicked }: any) => {
  const [isLiked, toggleIsLiked] = useState<boolean>(false);

  return (
    <div className="d-flex justify-content-around">
      {menuItems.map((item: { label: string; icon: any }) => {
        switch (item.label) {
          case "Edit User":
          case "Delete User":
            return (
              <img
                key={item.label}
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
                key={item.label}
                onClick={() => {
                  toggleIsLiked((prevState) => !prevState);
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
