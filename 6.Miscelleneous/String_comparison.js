let x = "abc";
let y = "abc"; // these are string literals
let a = new String("abc"); // string obj
let b = String("abc"); // also string literal
console.log(x == y); // == -> checks only value
console.log(a == x);
console.log(b == x);
console.log(a == b);
console.log("----------");
console.log(a === x); // === -> checks both value and type
console.log(a === b);
console.log("----------");
console.log(typeof a);
console.log(typeof b);
console.log(typeof x);
