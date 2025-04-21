# Version control system
Hệ thống quản lý các phiên bản

Type:
- Local: Lưu ở máy cá nhân
- Centralize: Lưu ở máy chủ tập trung
- Distributed: Lưu ở nhiều máy khác nhau (Đang dùng)

# Git
**Cách chạy project**
-3 vùng trạng thái
Sau khi khởi tạo, git sẽ có 3 vùng trạng thái:
- Working directory
- Staging: Vùng chứa các thay đổi đã được thêm vào nhưng chưa commit
- Repository

Khởi tạo thư mục quản lý bởi git: git init

Cài đặt cấu hình git
- 1 repo:
    - git config user.name “<name>”
    - git config user.email “<email>”
- Toàn bộ máy tính (default)
    - git config --global user.name“user”
    - git config --global user.email“email”
Thêm file vào vùng staging:
    - Thêm 1 file: git add <file_name>
    - Thêm toàn bộ: git add .
Xem trạng thái file: git status
    - File màu xanh: vùng staging
    - File màu đỏ: vùng working 

**Commit: git commit -m”message”**

**Kiểm tra lịch sử commit: git log**

**Commit convention**

Cu phap: type : <short_description>
- Trong đó:
    - type: loại commit
        - **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
        - **feat**: thêm tính năng mới, test case mới
        - **fix**: sửa lỗi 1 test trước đó
    - short_description: mô tả ngắn gọn(50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

**Simple Workflow**

*Không dùng global config*

init -> config -> add -> commit -> push

*Dùng global config*

init -> add -> commit -> push

# Javascript

Chạy lệnh: node <file>

Ex: thư mục lesson-2/javascript/01-hello.js

node lesson-2/javascript/01-hello.js

## Variable
Variable = biến, dùng để lưu trữ giá trị, có thể thay đổi giá trị được.
Khai báo:
- var <ten_bien> = <gia_tri>;
-  let <ten_bien> = <gia_tri>;
Note:

Trong đó: <ten_bien>

   - Bắt đầu bằng ký tự chữ, hoặc gạch dưới hoặc $
   - KHÔNG được bắt đầu bằng số  
   - KHÔNG được chứa các kí tự toán học logic (+ * < > ...)
   - KHÔNG chứa dấu cách
   - KHÔNG là các "từ khóa", tức là các từ đã có trong Javascript (ví dụ: var, let, for, if,...)
   - **Lưu ý:** tên biến không được trùng nhau
Phạm vi của biến

    - var: phạm vi toàn cục (global)
    - let: phạm vi trong cặp ngoặc {}
  
- Nên dùng: let, vì dễ kiểm soát phạm vi của biến  
- Để thay đổi giá trị của biến, ta thực hiện gán lại giá trị của biến sang giá trị khác mà không cần từ khoá var/let. 
  - var name = “Playwright”;
  - name = “Playwright Việt Nam”;


## Constant 
Là hằng số, dùng để khai báo các giá trị không thể thay đổi

*Note*

Khi nào dùng var/let, khi nào dùng const?
   - var/let: khi biến sẽ gán lại
   - const: khi biến không gán lại
   - Thường sẽ dùng let và const, KHÔNG dùng var

## Data type
Là kiểu dữ liệu

Nhóm kiểu dữ liệu nguyên thủy: String, Number, Boolean, Undefined, Null, Symbol.

-  Kiểu String: dùng để khai báo một chuỗi, dạng văn bản. Có thể lưu giá trị kiểu chuỗi nằm trong cặp ngoặc kép hoặc ngoặc đơn
-  Kiểu Number: dùng để khai báo một số.
-  Kiểu Boolean: dùng để khai báo một giá trị kiểu đúng sai (true hoặc false), Thường được dùng trong câu điều kiện
-  Kiểu undefined: đại diện cho giá trị chưa được định nghĩa
   -  VD: var name = undefined; console.log(name)
- Kiểu null: đại diện cho giá trị rỗng -  không chứa gì cả

Nhóm kiểu dữ liệu đối tượng: đây là các kiểu dữ liệu cho người dùng tự tạo ra

## Các kí tự đặc biệt
- Bạn cần dùng kí tự escape \ đứng trước
- Kí tự \: \\
- Kí tự nháy đơn: \’
- Kí tự nháy kép: \”
- Kí tự xuống dòng: \n
- Kí tự đầu dòng: \r
- Kí tự tab: \t

## Comparison operator
Là toán tử so sánh, dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả trả về Boolean 

Các toán tử so sánh:
- So sánh hơn kém: >, <
- So sánh bằng: ==, ===, !=, !==, >=, <=

Lưu ý
- == Phép so sánh bằng, chỉ so sánh giá trị, không so sánh về kiểu dữ liệu
- === Phép so sánh bằng, so sánh cả về giá trị và về kiểu dữ liệu
- != Phép so sánh khác, chỉ so sánh về giá trị, không so sánh về kiểu dữ liệu
- !== Phép so sánh khác, so sánh cả về giá trị và về kiểu dữ liệu

## Unary operator
Là toán tử 1 ngôi
  
Dùng để tăng hoặc giảm giá trị
  - i++ bằng với i=i+1
  - i-- bằng với i=i-1

## Arithmetic operator 
Là toán tử só học
-  Dùng tính toán giá trị biểu thức
-  Các phép toán: +, -, *, /

## Toan tu chia du
% la toan tu chia du

Neu so le, chia du cho 2 = 1; x % 2 === 1

Neu so chan, chia du cho 2 = 0; x % 2 === 0

## Conditional 
Là điều kiện, dùng để kiểm tra có nên thực hiện đoạn logic không

Cú pháp: if (<điều kiện>) { // code }. 

Nếu điều kiện đúng, sẽ chạy đoạn code

## Loops
- Dùng để thực hiện một đoạn logic một
số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều
kiện dừng>; <điều kiện tăng>) {// code }
- Ví dụ:
for (let i = 1; i <= 10; i++) {
console.log("Giá trị của i là: ", i);
}

## Console.log()
- Để in ra giá trị của biến.
console.log(<variable_name>) 
- Để in ra kết hợp giá trị kiểu chuỗi và giá trị của biến, ta có hai cách như sau:
  
        console.log(“Dùng dấu cộng như sau: “ + name)

        console.log(“Hoặc dùng dấu phẩy: “, name)

- Để nối chuỗi từ hai biến, ta sử dụng dấu cộng (+):
  
    Ex:
    - const str1 = “Hello”;
    - const str2 = “Playwright Viet Nam”
    - console.log(str1 + str2); // HelloPlaywright Viet Nam
###
- Format code 
  - Window: Alt + Shift + F
- Comment code 
  - Ctrl + / 
  - Shift + Alt + A

## Toán tử chia dư %
-   Nếu số lẻ chia cho 2 = 1: x % 2 === 1
-   Nếu só chẵn chia cho 2 = 0: x % 2 === 0


