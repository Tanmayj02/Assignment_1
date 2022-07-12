import {
  faHeart,
  faPen,
  faDeleteLeft,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
// const dislikeUserImageUrl: string =
//   "https://media.istockphoto.com/vectors/editable-stroke-black-heart-line-icon-isolated-on-a-white-background-vector-id1204388520?k=20&m=1204388520&s=612x612&w=0&h=hgZuOxUdztgZNG9ryyYFYEgaq-tIjBe3TabgLttHD4E=";
// const likeUserImageUrl: string =
//   "https://media.istockphoto.com/vectors/heart-shape-vector-id936563406?k=20&m=936563406&s=612x612&w=0&h=Tkb2tgRrx6ytD3mCh9efAvnwKFmhLckLfmseRXzEdGg=";

// const editUserImageUrl: string =
//   "https://media.istockphoto.com/vectors/sign-up-icon-isolated-on-white-background-vector-illustration-vector-id1193039142?k=20&m=1193039142&s=612x612&w=0&h=e53ulqLdsZowR7K4kuoI8OoVwi8IbPff1CKHKNPmGBw=";
// const deleteUserImageUrl: string =
//   "https://media.istockphoto.com/vectors/garbage-bin-sign-vector-id1139466631?k=20&m=1139466631&s=612x612&w=0&h=F3hOMYdQTDn4NFEi94i9StIbDxJ1v7mX79lDxz1cXLk=";

console.log(typeof faHeart);
export const menuItems: {
  label: string;
  iconSelected: any;
  iconNotSelected: any;
}[] = [
  {
    label: "Like User",
    iconSelected: faHeart,
    iconNotSelected: faHeartBroken, ///{ like: likeUserImageUrl, dislike: dislikeUserImageUrl },
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
