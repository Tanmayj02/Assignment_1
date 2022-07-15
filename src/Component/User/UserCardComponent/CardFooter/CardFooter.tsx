import "../../../../Style/Modal.css";
import { menuItems } from "./MenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useMemo } from "react";
import { Button } from "react-bootstrap";

// const Icon = ({ id, icon, onClick }: any) => {
//   console.log("Icon", id);
//   return (
//     <FontAwesomeIcon className="imagefooter" icon={icon} onClick={onClick} />
//   );
// };

// const MemorisedIcon = memo(Icon);

// const CardFooter = ({ id, onMenuItemClicked, isLiked }: any) => {
//   // console.log("CardFooter", id, isLiked);

//   const renderIcon = (menuItem: any) => {
//     const { label, iconSelected, iconNotSelected } = menuItem;
//     // const iconVisible = isLiked ? iconSelected : iconNotSelected;
//     return (
//       <div>
//         {/* <Button key={label} onClick={() => onMenuItemClicked(label, id)}>
//           {label}
//         </Button> */}
//         {menuItems.map(({ iconSelected, iconNotSelected, label }) => (
//         <div>
//           <FontAwesomeIcon
//             key={iconSelected}
//             onClick={() => onMenuItemClicked(label, id)}
//             icon={isLiked ? iconSelected : iconNotSelected}
//           ></FontAwesomeIcon>
//       </div>
//     );
//   };

//   return (
//     <div className="d-flex justify-content-around">
//       {menuItems.map(renderIcon)}
//     </div>
//   );
// };

// export default memo(CardFooter);

// const CardFooter = ({ id, onMenuItemClicked, isLiked }: any) => {
//   //const [isLiked, toggleIsLiked] = useState<boolean>(false);
//   return menuItems.map(({ iconSelected, iconNotSelected, label }) => (
//     <div>
//       <FontAwesomeIcon
//         key={iconSelected}
//         onClick={() => onMenuItemClicked(label, id)}
//         icon={isLiked ? iconSelected : iconNotSelected}
//       ></FontAwesomeIcon>
//     </div>
//   ));
// };

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
          ></FontAwesomeIcon>
        </div>
      ))}
    </div>
  );
};

export default memo(CardFooter);
