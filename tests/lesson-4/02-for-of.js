const str = "Playwright"
//1
for (const char of str) { console.log(char) }
//2
let newStr = []
for (let char of str) {
    newStr.unshift(char)
}
console.log(newStr)
//3
let arr = [1, 2, 3, 4, 3, 55, 23]
let firstIndex = -1; // biểu thị rằng chưa tìm thấy 
let lastIndex = -1;
let index = 0;

for (const value of arr) {
    if (value === 3) {
        if (firstIndex === -1) {
            firstIndex = index;
        }
        lastIndex = index;
    }
    index++;
}
console.log("Vị trí đầu tiên của 3 là:", firstIndex);
console.log("Vị trí cuối cùng của 3 là:", lastIndex);

const dupArr = [1, 2, 3, 1, 2, 4, 5]
const result = [];
for (const value of dupArr) {
    if (dupArr.indexOf(value) === dupArr.lastIndexOf(value)) {
        result.push(value);
    }
}
console.log("Các phần tử chỉ xuất hiện 1 lần:", result);