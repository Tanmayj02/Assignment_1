//import axios from 'axios';
import { ComponentFactory, useEffect, useState } from "react";
import User from "./User";
import '../CSS/FetchProfile.css';


interface Geograph {
  lat: any;
  lng: any;
}

interface Addressdetails {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geograph;
}

interface Companydetails {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface PersonProf {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Addressdetails;
  phone: any;
  website: string;
  company: Companydetails;
}

function getUsers(): Promise<PersonProf[]> {
  // For now, consider the data is stored on a static `users.json` file
  return (
    fetch("https://jsonplaceholder.typicode.com/users")
      // the JSON body is taken from the response
      .then((res) => res.json())
  );
}


export const FetchProfiles = () => {

  const [users , setUsers] = useState<PersonProf[]>([]);

  useEffect(() => {
    getUsers().then( (usersData) => {
        setUsers(usersData);
    })
  }, [])
  
  return (
    <div className="container">
      {users.map((usr) => (
        <User
          key={usr.name}
          name={usr.name}
          email={usr.email}
          phone={usr.phone}
          website={usr.website}
        />
      ))}
    </div>
  );
};
