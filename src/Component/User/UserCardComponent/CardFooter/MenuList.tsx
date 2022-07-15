import {
  faPen,
  faTrash,
  faHeart as disliked,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as liked } from "@fortawesome/free-regular-svg-icons";

export const menuItems: {
  label: string;
  iconSelected: any;
  iconNotSelected: any;
}[] = [
  {
    label: "Like User",
    iconSelected: disliked,
    iconNotSelected: liked,
  },
  {
    label: "Edit User",
    iconSelected: faPen,
    iconNotSelected: faPen,
  },
  {
    label: "Delete User",
    iconSelected: faTrash,
    iconNotSelected: faTrash,
  },
];
