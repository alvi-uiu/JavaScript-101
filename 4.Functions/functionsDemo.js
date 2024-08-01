//write a functions to check if the num is Even or Odd:

function isEven(num) {
  if (num % 2 == 0) return true;
  else return false;
}

for (let i = 1; i <= 50; i++) {
  if (isEven(i)) {
    console.log(i, "is Even");
  } else {
    console.log(i, "is Odd");
  }
}
