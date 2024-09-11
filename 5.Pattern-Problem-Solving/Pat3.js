// Pattern 3 :

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = 1; j <= n - i; j++) {
      x += " ";
    }
    for (let k = 1; k <= i; k++) {
      x += "*";
    }
    console.log(x);
  }
}

pattern3(4);
