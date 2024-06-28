import { markAsUntransferable } from "worker_threads";

//data type of person
interface person{
    age :number,
    name :string,
    nationality :string,
    student :boolean
}

//object of person
let person = {
    age : 26,
    name : 'faizan',
    nationality : 'pakistan' ,
    student : true
}

//print the object
console.log(person);



//data type of car 
interface car{
    maker : string,
    color : string,
    model : number,
    automatic : boolean
}
// object of car
let car = {
    maker : 'toyota',
    color : 'black',
    model : '2016',
    automatic : true
}

// print of car's object
console.log(car);