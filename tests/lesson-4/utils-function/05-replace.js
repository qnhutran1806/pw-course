let phoneNumber = "0123 456 789"
let report = "Có một lỗi trong hệ thống."
let numbersStr = "1,234,567"
//
let newPhone = phoneNumber.replaceAll(" ", ".")
console.log(newPhone)
//
let newWord = report.replace("lỗi", "bug")
console.log(newWord)
//
let newStr = numbersStr.replaceAll(",", ".")
console.log(newStr)