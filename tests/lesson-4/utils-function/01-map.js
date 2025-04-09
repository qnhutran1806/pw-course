let scores = [85, 90, 78]
let arrScores = scores.map(score => {
    if (score < 90) {
        return score * 1.1; // tăng 10%
    } else {
        return score * 0.95; // giảm 5%
    }
});

console.log(arrScores);
//
let numbers = [1, 2, 3]
const stringNumbers = numbers.map(num => String(num));
console.log(stringNumbers);
//
const newNumbers = numbers.map(num => num * 2);
console.log(newNumbers);

