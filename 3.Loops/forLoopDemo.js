//Print all odd numbers from 1 to 100 :

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}

// sum of the first 10 numbers :

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("sum of first 10 numbers : ", sum);

//Print numbers from 100 to -100:

for (let i = 100; i >= -100; i--) {
  console.log(i);
}
