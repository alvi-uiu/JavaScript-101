// 1 :

// let obj = {};
// by default the toStirng() method prints -> object Object (string)
// console.log(obj.toString());

/* 

The first object refers to the type of object.
The second Object refers to the object's class, which is Object in this case.

*/

//---------------------------------------------------------------------------------

// I can override it if I want :

//2 :

// let obj = {
//   // by default it gives  : object Object
//   toString() {
//     return 77;
//   },
// };

// console.log(obj.toString());

//---------------------------------------------------------------------------------

// 3 :

// let obj = {
//   x: 99, // by default valueOf() returns the same obj (object)
// };

// console.log(obj.valueOf());
// console.log(typeof obj.valueOf());

//---------------------------------------------------------------------------------

// 4 :

// but I can overwrite it if I want :

// let obj = {
//   x: 88,

//   valueOf() {
//     return "test";
//   },
// };

// console.log(obj.valueOf());
// console.log(typeof obj.valueOf());

//---------------------------------------------------------------------------------

// ecmaScript doc :
// Substraction operator() - > ToNumber() -> ToPrimitive() -> OrdinaryToPrimitive()

let obj = {};

console.log(77 - obj); // substraction operation
console.log(obj.valueOf()); // obj
console.log(obj.toString()); // string

// Now , 77 - a stirng = Not A Num (NaN)
