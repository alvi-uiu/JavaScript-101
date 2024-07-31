//min of 3 given numbers :

let a = -555599;
let b = -88555566;
let c = -9933333339;

if (a < b) {
  if (a < c) {
    console.log("min = ", a);
  } else {
    console.log("min = ", c);
  }
} else {
  if (b < c) {
    console.log("min = ", b);
  } else {
    console.log("min = ", c);
  }
}

console.log("----------------------------------");

//way 2 :
console.log("way 2 : ");
let x = -9999999,
  y = -99988,
  z = -999;

if (x < y && x < z) console.log(x);
else if (y < x && y < z) console.log(y);
else console.log(z);

console.log("----------------------------------");

// Is a Valid Triangle :

let e = 7,
  f = 10,
  g = 13;

if (e + f > g && e + g > f && f + g > e) console.log("valid triangle");
else console.log("not a valid triangle ");

console.log("----------------------------------");

// Given length of 3 axis of a triangle , tell if the triangle
// scalene, equilateral , isosceles :

let i = 7,
  j = 9,
  k = 77;

if (i == j && i == k && j == k) console.log("equilateral");
else if (i != j && i != k && j != k) console.log("scalene");
else console.log("isosceles");
