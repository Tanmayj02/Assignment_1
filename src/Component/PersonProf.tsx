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

  export default PersonProf;