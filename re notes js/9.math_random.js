// 📌 Math.random()
// Returns a float between [0, 1)
Math.random();

// 📌 Random Integer in Range [min, max]
Math.floor(Math.random() * (max - min + 1)) + min;

// 🔹 Example: 1 to 10
Math.floor(Math.random() * 10) + 1;

// 🔹 Example: Dice roll (1–6)
Math.floor(Math.random() * 6) + 1;

// 📌 Random Float in Range [min, max)
Math.random() * (max - min) + min;

// 🔹 Example: Float between 5 and 10
Math.random() * (10 - 5) + 5;

// 📌 Random Element from Array
let arr = ["apple", "banana", "cherry"];
let randIndex = Math.floor(Math.random() * arr.length);
arr[randIndex];
