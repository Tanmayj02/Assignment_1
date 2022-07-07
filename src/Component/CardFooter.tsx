import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BasicModal from "./BasicModal";
import userDetail from "./UserDetails";
import "../CSS/Modal.css";

const CardFooter = ({ id, onMenuItemClicked, menuItems }: any): any => {
  return (
    <div>
      {menuItems.map((item: any) => {
        return (
          <img
            onClick={() => {
              onMenuItemClicked({ id, ...item });
            }}
            className="imagefooter"
            src={item.icon}
          ></img>
        );
      })}
    </div>
  );
};

export default CardFooter;
