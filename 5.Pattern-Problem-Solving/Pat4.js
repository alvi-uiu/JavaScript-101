//Pattern 4 :

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = 1; j <= n - i; j++) {
      x += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      x += "*";
    }

    for (let j = 1; j <= n - i; j++) {
      x += " ";
    }
    console.log(x);
  }
}

pattern4(5);
