//1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
};
console.log("Năm sản xuất của xe:", car.year);
//2
let person = {
    name: "Nhu",
    adress: {
        street: "Nguyen Thi Minh Khai",
        city: "Ho Chi Minh",
        country: "Viet Nam",
    }
};
console.log("Địa chỉ là:", person.adress.street)
//3
let student = {
    nameStudent: "Nhu",
    gradeStudent: {
        math: 5,
        english: 7,
    }
};
console.log("Math:", student["gradeStudent"]["math"])
//4
const settings = {
    volume: 1000,
    brightness: 20,
};
settings.volume = 99
console.log("New volume:", settings.volume)
//5
let bike = {
};
bike["color"] = "blue";
console.log(bike)
//6
const employee = {
    name: "Nhu",
    age: "24",
};
delete employee.age
console.log(employee)
//7
let school = {
    classA: ["An", "Bình", "Châu"],
    ClassB: ["Đào", "Hương", "Giang"],
};
console.log(school)