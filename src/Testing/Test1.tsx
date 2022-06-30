export {} 


type Person = {
    name: string;
    age?: number; // to make age optional
}

//or

interface Person1{
    name: string;
    age?: number; // to make age optional
} 
// person will work same as person1

// how to make Person2 interface having all props of Person1 and some of its own prop using "extends"

let Person: Person = {
    name: "Tanamy",
    age: 21
};


function PrintName(name : string){
    console.log(name);
}

// or

let PrintName1 : (name: string) => void;

// rafce to make functional component