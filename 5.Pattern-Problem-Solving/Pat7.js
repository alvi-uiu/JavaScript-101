//Pattern 7 :

function upper(n) {
  for (let i = 1; i <= (n - 1) / 2; i++) {
    let x = "";

    for (let j = 1; j <= i; j++) {
      x += "*";
    }

    for (let k = 1; k <= n - 2 * i; k++) {
      x += " ";
    }

    for (let j = 1; j <= i; j++) {
      x += "*";
    }
    console.log(x);
  }
}

function mid(n) {
  let x = "";
  for (let i = 1; i <= n; i++) {
    x += "*";
  }
  console.log(x);
}

function lower(n) {
  for (let i = 1; i <= (n - 1) / 2; i++) {
    let x = "";

    for (let j = 1; j <= (n - 1) / 2 - i + 1; j++) {
      x += "*";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      x += " ";
    }
    for (let j = 1; j <= (n - 1) / 2 - i + 1; j++) {
      x += "*";
    }
    console.log(x);
  }
}

upper(7);
mid(7);
lower(7);
