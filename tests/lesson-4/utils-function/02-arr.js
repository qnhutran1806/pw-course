let numbers = [1, 2, 3]
let names = ["Alice", "Bob", "Charlie"]
//push
numbers.push(4)
console.log(numbers)
names.push("David");
console.log(names);
//pop
let last = numbers.pop();
console.log(numbers);
console.log(last);
//unshift
numbers.unshift(0);
console.log(numbers);
names.unshift("David");
console.log(names);
//shift
let newNumbers = [1, 2, 3, 4]
newNumbers.shift()
console.log(newNumbers)