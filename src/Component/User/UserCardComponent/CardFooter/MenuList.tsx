import {
  faPen,
  faTrash,
  faHeart as disliked,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as liked } from "@fortawesome/free-regular-svg-icons";

export interface menuItemType {
  label: string;
  iconSelected: IconDefinition;
  iconNotSelected: IconDefinition;
}

export const menuItems: menuItemType[] = [
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
