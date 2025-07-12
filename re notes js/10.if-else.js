// 📌 Basic Syntax
if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}

// 📌 if - else if - else chain
if (a > b) {
  console.log("a is greater");
} else if (a === b) {
  console.log("a equals b");
} else {
  console.log("b is greater");
}

// 📌 Multiple conditions using logical operators
if (x > 0 && y > 0) {
  console.log("Both are positive");
}

if (x === 0 || y === 0) {
  console.log("At least one is zero");
}

// 📌 Shorthand using ternary operator
let result = (score >= 50) ? "Pass" : "Fail";

// 🔹 Nesting
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Show admin dashboard");
  } else {
    console.log("Show user dashboard");
  }
}
