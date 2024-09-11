//Pattern 6 :

function upper(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = 1; j <= n - i; j++) {
      x += " ";
    }
    for (k = 1; k <= 2 * i - 1; k++) {
      x += "*";
    }
    for (let j = 1; j <= n - i; j++) {
      x += " ";
    }
    console.log(x);
  }
}

function lower(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = 1; j <= i; j++) {
      x += " ";
    }
    for (let k = 1; k <= 2 * (n - i) - 1; k++) {
      x += "*";
    }
    for (let j = 1; j <= i; j++) {
      x += " ";
    }
    console.log(x);
  }
}

//Function Call :

upper(5);
lower(5);
