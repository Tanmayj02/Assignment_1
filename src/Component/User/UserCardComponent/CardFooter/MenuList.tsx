import {
  faHeart,
  faPen,
  faDeleteLeft,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

export const menuItems: {
  label: string;
  iconSelected: any;
  iconNotSelected: any;
}[] = [
  {
    label: "Like User",
    iconSelected: faHeart,
    iconNotSelected: faHeartBroken,
  },
  {
    label: "Edit User",
    iconSelected: faPen,
    iconNotSelected: faPen,
  },
  {
    label: "Delete User",
    iconSelected: faDeleteLeft,
    iconNotSelected: faDeleteLeft,
  },
];
