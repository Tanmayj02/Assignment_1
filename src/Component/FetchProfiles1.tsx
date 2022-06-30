//import axios from 'axios';
import { userInfo } from "os";
import { ComponentFactory, useState } from "react";

interface Geograph {
  lat: number;
  lang: number;
}

interface Addressdetails {
  street: number;
  suite: number;
  city: string;
  zipcode: number;
  geo: Geograph;
}

interface Companydetails {
  name: number;
  catchPhrase: number;
  bs: string;
}

interface PersonProf {
  id: number;
  name: number;
  username: string;
  email: string;
  address: Addressdetails;
  phone: number;
  website: number;
  company: Companydetails;
}

function getUsers(): Promise<PersonProf[]> {
  // For now, consider the data is stored on a static `users.json` file
  return (
    fetch("https://jsonplaceholder.typicode.com/users")
      // the JSON body is taken from the response
      .then((res) => res.json())
      .then((res) => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res as PersonProf[];
      })
  );
}

/*
*/
 
//const [User , setUser] = useState<PersonProf[]>([]);

export const FetchProfiles1 = () => {

  //const [User , setUser] = useState<PersonProf[]>([]);

  getUsers().then(value => {
    console.log(value);
  });

  
  return (
    <div>
      <h2> Welcome TJ Fetch </h2>
    </div>
  );

};
