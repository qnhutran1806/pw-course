//1
let departurePlanet = "Trái Đất"
let mission = "Khám phá Vũ trụ K13"
let crew = ["Nhu", "Trang", "Hien", "Khoa", "Phuc", "Thom"]
function launchShip(crew) {
    let crewList = crew.toString();
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
console.log(launchShip(crew))
//2
function calculateDistance(speed, time) {
    const distance = speed * time
    return distance
}
console.log(`Khoảng cách đến hành tinh: ${calculateDistance(1000, 24)} km`)
//3
function convertTimeToHex(time) {
    let decimalNumber = time
    let hexadecimalNumber = decimalNumber.toString(16);
    return hexadecimalNumber
}
console.log(`Giá trị thời gian đã được chuyển đổi sang hệ thập lục phân: ${convertTimeToHex(120)} `)
//4
let code = "K13 Challenge"
function decryptCode(code) {
    return code
        .split("") //chia chuỗi thành mảng các ký tự và sau đó dùng map để duyệt từng ký tự cuối cùng dùng join để thành chuỗi
        .map(text => {
            if (text >= "a" && text <= "z") {
                return text.toUpperCase();
            } else if (text >= "A" && text <= "Z") {
                return text.toLowerCase();
            } else {
                return text; // giữ nguyên số, dấu cách
            }
        })
        .join("")
}
console.log(decryptCode(code))
//5
function returnToEarth ()
{
    console.log(`Chuẩn bị trở về Trái Đất`)
}
returnToEarth()