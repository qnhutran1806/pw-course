//push: thêm phần tử vào mảng vd:arr.push(3)
//1
let total = 0
for (let i = 1; i <= 100; i++) {
    total = total + i

};
console.log(total)
//2
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
};
//3
let mangSoLe = []
for (let i = 1; i <= 99; i = i + 2) {
    mangSoLe.push(i); //Mỗi lần lặp lại giá trị i, sẽ được thêm vào mangSoLe
};
console.log(mangSoLe)
//4
for (let i = 1; i <= 10; i++) {
    let email = `user${i}@example.com`;
    console.log(email);
};
//5
let arrDoanhThu = [
    { month: 1, total: 150 },
    { month: 2, total: 200 },
    { month: 3, total: 180 },
    { month: 4, total: 210 },
    { month: 5, total: 190 },
    { month: 6, total: 250 },
    { month: 7, total: 230 },
    { month: 8, total: 220 },
    { month: 9, total: 260 },
    { month: 10, total: 240 },
    { month: 11, total: 280 },
    { month: 12, total: 300 },
];
let tongDoanhThu = 0
for (let i = 0; i < arrDoanhThu.length; i++) {
    tongDoanhThu += arrDoanhThu[i].total
};
console.log("Tổng Doanh thu trong năm:", tongDoanhThu)
