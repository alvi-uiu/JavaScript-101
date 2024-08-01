//Write a function to print if the num prime or not :

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let num = 13;

let result = isPrime(num);

if (result === true) console.log("its a Prime");
else console.log("its not a Prime");
