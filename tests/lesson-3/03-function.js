//1
function multiply(a, b) {
    return a * b;
};
console.log(multiply(3, 7))
//2
function findMin(a, b, c) {
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
};
console.log(findMin(4, 9, 0));
console.log(findMin(-3, 0, 7));
//3
let students = [
    { name: "Nhu", score: 4 },
    { name: "Hoa", score: 8 },
    { name: "Quynh", score: 7 },
    { name: "Nam", score: 2 },
];
function getToStudents(students, threshold) {
    let listTopStudent = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            listTopStudent.push(students[i].name);
        }
    }
    return listTopStudent;
};
console.log(getToStudents(students, 6));
//4
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
};
console.log(calculateInterest(1000, 5, 3)); // 1150