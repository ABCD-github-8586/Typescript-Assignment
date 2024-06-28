
// equality and inequality tests
console.log("equality test with string: ", ("apple" as string)=== "apple");
console.log("inequality test with string: ", ("apple" as string)!== "orange");

// • Tests using the lower case function
console.log("lower case function test: ", "HELLO".toLowerCase()=== "hello" );

// • Numerical tests involving equality and inequality
console.log("equality test with numbers: ", 26===26);
console.log("inequality test with numbers: ", (55 as number) !== 77);

//  greater than and less than
console.log("greater than test: ", 10>5);
console.log("less than test: ", 10<25);
// greater than or equal to
console.log("greater than and equal test: ", 56 >= 56);

//less than or equal to
console.log("less than and equal test: ", 15 <= 20);

// • Tests using "and" operators
console.log("And operator test: ", 5===5 && 10>5);
// • Tests using "or" operators
console.log("Or operator test: ", 5===5 || 10>5);

// • Test whether an item is in a array
const fruits : string[] =['Apple','Orange','Banana'];
console.log('test "Banana"in the array: ',fruits.includes("Banana"));

// • Test whether an item is not in a array
console.log('test "Guava"in the array: ',!fruits.includes("Guava"));