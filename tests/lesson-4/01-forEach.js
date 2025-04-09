let numbers = [1, 2, 3];
//1
numbers.forEach(num => { console.log(num) })
//2
let total = 0;
numbers.forEach((num, index) => { total = total + num })
console.log("Tổng là:", total)

let min = numbers[0]
numbers.forEach((num, index) => { if (num < min) min = num })
console.log("Giá trị nhỏ nhất là:", min)

let max = numbers[0]
numbers.forEach((num, index) => { if (num > max) max = num })
console.log("Giá trị lớn nhất là:", max)

//3
let newNum = []
numbers.forEach((number, index) => { number = number * 2, newNum.push(number) })

console.log("Mảng mới là:", newNum)