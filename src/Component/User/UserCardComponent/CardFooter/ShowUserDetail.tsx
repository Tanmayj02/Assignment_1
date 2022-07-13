import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userDetail from "../../../UserDetail";

export const About = () => {
  let { username } = useParams();
  const [userImageUrl, setUserImageUrl] = useState<string>("");

  useEffect(() => {
    fetch(
      `https://avatars.dicebear.com/v2/avataaars/${username}}.svg?options[mood][]=happy`
    )
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setUserImageUrl(imageObjectURL);
      });
  }, []);

  const users: userDetail[] = useSelector((state: any) => state.users);

  const filterUserDetails = users.filter((user: any) => {
    if (user.name === username) {
      return user;
    }
  });
  let selectedUserDetail: userDetail;
  if (filterUserDetails.length > 0) {
    selectedUserDetail = filterUserDetails[0];
    return (
      <div className="container">
        <p className="blockquote"> User details are as follows :</p>
        <img
          style={{ height: 250, width: 250 }}
          src={userImageUrl}
          alt={username}
        />
        <p className="text-text-primary">
          Name of the User is {selectedUserDetail.name}
        </p>
        <p className="text-text-primary">
          Phone of the User is {selectedUserDetail.phone}
        </p>
        <p className="text-text-primary">
          Website of the User is {selectedUserDetail.website}
        </p>
        <p className="text-text-primary">
          mail of the User is {selectedUserDetail.email}
        </p>
        <p className="text-text-primary">
          Addresss of the User is {selectedUserDetail.address.street}
          {selectedUserDetail.address.city}
        </p>
      </div>
    );
  } else {
    return <div> Users Does not exist</div>;
  }

  //return <div>He is {username}</div>;
};
