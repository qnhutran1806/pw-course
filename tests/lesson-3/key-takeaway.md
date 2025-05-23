# Git
## Tạo một kho lưu trữ Git mới
- git init

## Thay đổi commit message, thay đổi thông tin commit cuối cùng mà không thay đổi nội dung commit
- git commit --amend -m "message"

## Đưa từ vùng staging về working directory
- git restore --staged <file>

## Đưa từ vùng repository về working directory (uncommit), hoàn tác commit gần nhất, nhưng giữ lại các thay đổi trong working directory
- git reset HEAD~1 (undo 1 commit) 

## Tạo branch 
- git brach <branch_name>

## Di chuyển sang nhanh khác
- git checkout <branch_name>

## Tạo và di chuyển sang branch khác
- git checkout -b <branch_name>

# File .gitignore
- .gitignore = GitIgnore = Bỏ qua
- Ignore file <file_name>
- Ignore folder <folder_name>/

# Javascript
## Convention
- Snake_case: snake_case_now_now
- kebab-case: kebab-case-now-now
- camelCase: camelCaseNowNow
- PascalCase: PascalCaseNowNow

## Formatted console.log
- console.log(‘Toi la Nga’);
- console.log(“Toi la Phong”);
- console.log(`${variable_name}`)
- let name = “Nga”;
- console.log(`Toi la ${name}`);
- console.log(“Toi ten la” + name + “”)

## Objet
### Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến và hằng số. Một tập hợp giá trị dưới dạng key-value
Khai báo: let/const <ten_object> = { <thuoc_tinh>: <gia_tri>,...}
Trong đó:
- <thuoc_tinh>: giống quy tắc đặt tên biến
- <gia_tri>: có kiểu giống biến, hoặc là 1 object khác.

- Key cũng có thể gọi là thuộc tính của object
- Kiểu dữ liệu của key luôn là string
- Kiểu dữ liệu value có thể là bất cứ kiểu dữ liệu nào đã học: string, number, boolean, null, object, arr,...
- In value
  - const sv1 = {"ID": 1, "name": Alex}
  - console.log(sv1.ID)
  - console.log(sv1["name"])
- Thêm thuộc tính
  - sv1.age = 8;
  - sv1["Class new"] = "ABC";
  - Kết quả: {"ID": 1, "name": Alex, age: 8, "Class new": "ABC"}
- Xóa thuộc tính: delete sv1.age 
- Nếu hằng số là một object, ta có thể thay đổi giá trị của thuộc tính
  - const student = { id: 10, name: "Alex"}
  - student.id = 11
  - student.name = "Nagi"

## Logical operator
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề


## Array
- Tạo mảng
    - Khai báo
    - Sử dụng
- Truy xuất mảng
    - Độ dài mảng: length (arr.length)
    - Lấy phần tử theo index:[0], [1], [2]

Để khai báo mảng, ta sử dụng cú pháp:
let/const/var <tên_mảng> = [<danh sách các giá trị, cách nhau bởi dấu phẩy ","]

Ví dụ:
let numberArr = [1, 20.5, -300, 4];

const strArr = ["Playwright", "Việt", "Nam"];

var mixedArr = ["Playwright", 10, true, null, {id: 1, name: "Alex"}];

console.log(numberArr);

console.log(strArr);

console.log(mixedArr);

// Kết quả:

// [ 1, 20.5, -300, 4 ]

// [ 'Playwright', 'Việt', 'Nam' ]

// [ 'Playwright', 10, true, null, { id: 1, name: 'Alex' }]

Giải thích:
- Mảng numberArr chứa các dữ liệu kiểu số.
- Mảng strArr chứa các dữ liệu kiểu chuỗi.
- Mảng mixedArr chứa các dữ liệu kiểu hỗn hợp: chuỗi, số, boolean, object.
### Thao tác trên mảng
- Lấy độ dài của mảng: arr.length
  - VD: const arr = [0,1,2]
  - console.log(arr.length)
  - 3
- Truy xuất phần tử mảng: arr[index]
- Thêm phần tử vào mảng 
  - Thêm vào đầu mảng: **unshift()**
  - Thêm vào cuối mảng: **push()**
- Xóa phần tử của mảng
  - Xóa ở đầu mảng: **shift()**
  - Xóa ở cuối mảng: **pop()**

## Function
### Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
Khai báo: function <name_Function> (<danh_sách_tham_số>)
{
    //code
}

- Hàm không có tham số 
    - VD: hello()

- Hàm có tham số
    - Ví dụ
        - function describePerson(name, age, city) {
        console.log(name + " is " + age + " years old and lives in " + city + ".");}
        - describePerson("Bob", 30, "New York");
        
        // Kết quả: bob is 30 years old and lives in New York

- Hàm có giá trị trả về
là hàm trả về một giá trị sau khi hoàn thành thực thi. Giá trị trả về được chỉ định bằng từ khóa return
    - Ví dụ
        - function add(a, b) { // a và b là tham số
        return a + b; // Trả về tổng của a và b }
        - let sum = add(5,3)