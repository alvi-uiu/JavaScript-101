let x = console.log(777);

console.log(x); // console.log() function returns -> undefined

// In JS if we dont manually return anything , it automatically returns undefined :

function prnt(name) {
  console.log("Hello ", name);
}

let result = prnt("Marco Rio");

console.log(result);

//-------------------------------

function prnt2(name) {
  console.log("Hello ", name);
  return "See Ya";
}

let result2 = prnt2("Reus");

console.log(result2); // now it will return the returned value from the fun;
