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
    </div>
  );
};

export default CardFooter;
