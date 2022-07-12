import "../../../../Style/Modal.css";
import { FaIcons } from "react-icons/fa";
import { useState } from "react";
import { menuItems } from "./MenuList";
import { FaBeer } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPen,
  faDeleteLeft,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

const CardFooter = ({ id, onMenuItemClicked, isLiked }: any) => {
  //const [isLiked, toggleIsLiked] = useState<boolean>(false);

  return (
    <div className="d-flex justify-content-around">
      {menuItems.map(({ iconSelected, iconNotSelected, label }) => (
        <div>
          <FontAwesomeIcon
            key={iconSelected}
            onClick={() => onMenuItemClicked(label, id)}
            icon={isLiked ? iconSelected : iconNotSelected}
          ></FontAwesomeIcon>
        </div>
      ))}

      {/* {menuItems.map((item: { label: string; icon: any }) => {
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
          case "e User":
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
      })} */}
    </div>
  );
};

export default CardFooter;
