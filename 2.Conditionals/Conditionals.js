// If statement :

if (7 >= 7) {
  console.log("we are inside if ");
}

if (true) {
  console.log("true");
}

// if-else statement :

member = true;

if (member) {
  console.log("Welcome ");
} else {
  console.log("Sorry You must sign in first");
}

//else if :

let PremiumUser = false;
let VIpUser = true;
let GoldUser = true;
if (PremiumUser) {
  console.log("enjoy Premium Content !");
} else if (VIpUser) {
  console.log("enjoy VIP content !!");
} else if (GoldUser) console.log("enjoy Gold Content !");
else {
  console.log("Sorry you must purchase VIP or Premium subscription");
}

//nested if-else :

let isUserPrime = true;
let isUserDiscovery = false;

if (isUserPrime) {
  if (isUserDiscovery) {
    console.log("enjoy both prime and discovery content");
  } else {
    console.log("enjoy prime content only");
  }
} else {
  console.log("Buy a subscripton please");
}
