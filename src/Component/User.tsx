import "../CSS/User.css";
//import MailOutlineIcon from '@material-ui/icons/MailOutlined';

interface Props {
  name: string;
  email: string;
  phone: string;
  website: string;
}

const User = ({ name, email, phone, website }: Props) => {
  var url: string = "https://avatars.dicebear.com/v2/avataaars/";
  url = url.concat(name, ".svg?options[mood][]=happy");
  return (
    <div className="card">
      <img className="card_image" src={url} />
      <h2> name is {name} </h2>
      <h2> Phone is {phone} </h2>
      <h2> website is {website}</h2>
    </div>
  );
};

export default User;
