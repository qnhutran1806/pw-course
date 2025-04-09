let scores = [85, 90, 78]
let checkScores = scores.some(score => score > 80);
console.log(checkScores);

let ages = [18, 21, 16, 25];
let checkAges = ages.some(age => age >= 18);
console.log(checkAges)

let words = ["apple", "banana", "cherry", "date"]
let checkWords = words.some(word => word.length > 5);
console.log(checkWords)