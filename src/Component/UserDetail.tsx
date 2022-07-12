interface Geograph {
  lat: string;
  lng: string;
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

interface userDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Addressdetails;
  phone: string;
  website: string;
  company: Companydetails;
}

export default userDetail;
