let student = { "name": "Alex", "age": 10, "salary": 20 }
for (let key in student) {
    console.log(key)
    console.log(student[key])
}

let sum = 0;
for (const key in student) {
    if (typeof student[key] === "number") {
        sum += student[key];
    }
}
console.log("Tổng các giá trị số là:", sum);

let newArr = [];
for (const key in student) {
    newArr.push(key);
}
console.log(newArr) 