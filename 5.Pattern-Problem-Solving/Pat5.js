//Pattern 5 :

function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = i; j <= n; j++) {
      x += "*";
    }
    console.log(x);
  }
}

//way2 :

function pattern5x(n) {
  for (let i = 1; i <= n; i++) {
    let x = "";
    for (let j = 1; j <= n - i + 1; j++) {
      x += "*";
    }
    console.log(x);
  }
}

pattern5x(5);
