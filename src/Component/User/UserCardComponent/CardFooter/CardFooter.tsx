import "../../../../Style/Modal.css";
import { menuItems } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFooter = ({ id, onMenuItemClicked, isLiked }: any) => {
  if (id === 1) {
    console.log(onMenuItemClicked);
  }
  return (
    <div className="d-flex justify-content-around">
      {menuItems.map(({ label, iconSelected, iconNotSelected }: any) => (
        <div>
          <FontAwesomeIcon
            key={label}
            onClick={() => onMenuItemClicked(label, id)}
            icon={isLiked ? iconSelected : iconNotSelected}
            className="imagefooter"
          ></FontAwesomeIcon>
        </div>
      ))}
    </div>
  );
};

export default CardFooter;
