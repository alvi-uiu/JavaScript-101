// Patern 1 :

function pattern1(num) {
  for (let row = 1; row <= num; row++) {
    let x = "";
    for (let col = 1; col <= num; col++) {
      x += "*";
    }
    console.log(x);
  }
}
