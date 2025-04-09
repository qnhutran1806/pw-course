# JavaScript
## Phạm vi của biến
- Phạm vi (scope) là khu vực hoạt động của biến
- Phạm vi được thực hiện thông qua các cặp ngoặc nhọn ({})
- Đoạn code không nằm trong cặp ngoặc nhọn nào được gọi là phạm vi global (toàn cục)
- **var** có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined
- **let** không thể truy cập trước khi khai báo
## Điều kiện if ... else ...
**if (condition) {//code block} else {//code block}**
- Trong đó:
  - Nếu condition = true, sẽ chạy logic ở code block 1
  - Nếu condition = false, sẽ chạy logic ở code block 2
- Có thể hiểu đơn giản, điều kiện if...else là điều kiện nếu...thì. Nếu đúng thì chạy logic ở block của nếu. Nếu không đúng thì chạy logic ở block của thì

## Điều kiện if ... else if ...
**if (condition) {//code block} else if {//code block 1} else if {//code block 2}**
- Có thể hiểu if...else if là câu điều kiện nâng cao hơn câu điều kiện if, thêm 1 lần kiểm trả điều kiện, chia thành nhiều trường hợp
  - Nếu condition đúng, chạy logic trong code block1
  - Nếu condition sai, kiểm tra condition2
    - Nếu condition2 đúng, chạy logic trong code block2
    - Nếu condition2 sai, kiểm tra condition3
      - Nếu condition3 đúng, chạy logic code block3
      - Nếu condition3 sai, chạy logic trong code block4
- Có thể hiểu câu lệnh else là các trường hợp còn lại
## Điều kiện switch...case
- switch...case thường dùng để rẽ nhánh trong trường hợp có nhiều điều kiện khác nhau
- switch...case giúp code trở nên gọn gàng, đễ nhìn hơn
- Cú pháp: [Cú pháp switch case](https://blog.28tech.com.vn/c-switch-case)
- Trong đó:
  - condition gọi là biểu thức điều kiện
  - Các case_value1, case_value2, case_value3 được gọi là các giá trị của các trường hợp.
  - Nếu sau khi tính toán, giá trị của condition rơi vào case_value nào thì sẽ chạy đoạn code tương ứng với case đó
- Lưu ý
  - Mỗi case cần có **break** để thoát khỏi đoạn logic của case. Nếu không có break đoạn logic của case phía dưới sẽ tiếp tục được chạy
  - **default** là case mặc định. Trong trường hợp nếu không có case nào match, logic default sẽ được chạy
## Toán tử so sánh
- > Phép so sánh lớn hơn
- < Phép so sánh nhỏ hơn
- >= Phép so sánh lớn hơn bằng
- <= Phép so sánh bé hơn bằng
- == Phép so sánh bằng, chỉ so sánh giá trị, không so sánh về kiểu dữ liệu
- === Phép so sánh bằng, so sánh cả về giá trị và kiểu dữ liệu
- != Phép so sánh khác, chỉ so sánh về giá trị, không so sánh về kiểu dữ liệu
- !== Phép so sánh khác, so sánh cả về giá trị và về kiểu dữ liệu
## Vòng lặp forEach
- Cú pháp: <biến_là_tên_mảng>.forEach(callbackFn)
- Trong đó
  - <biến_là_tên_mảng>: tên của biến
  - callbackFn: viết tắt của callback function, là hàm xử lý vòng for. Thường hàm này sẽ là item => {// code ở đây}
  - ví dụ: 
    - let numberArr=[1,20.5,-300,4]
    - numberArr.forEach(number=>{console.log(number)})
  - Giải thích
    - numberArr: tên biến
    - number=>{console.log(number)} là hàm callback chứa thông tin mảng 
      - Chú ý tên biến number, biến này đại diện các phần tử trong mảng. Ở mỗi vòng lặp, biến number sẽ được gán các giá trị của từng phần tử trong mảng
- Tip sử dụng
  - Vòng lặp **forEach** dùng để lặp các phần tử trong mảng, khi bạn không cần lấy thứ tự các phần tử
  - Trong callback function nếu chỉ có duy nhất, có thể bỏ cặp ngoặc nhọn bao ngoài
    - Đẩy đủ: numberArr.forEach(number => {console.log(number)})
    - Rút gọn: numberArr.forEach(number => console.log(number));
## Vòng lặp for...in
- Cú pháp: for(const property in object){//code ở đây}
- Trong đó
  - const property: khai báo một biến tên là property. Trước mỗi vòng lặp, biến property này có giá trị là các thuộc tính objetc
  - object: là tên biến có kiểu dữ liệu object
- Vòng lặp for...in được sử dụng để duyệt qua chỉ số (index) của mảng, không phải các giá trị trong mảng
  - Ví dụ 
    - let arr = ["a", "b", "c"];
    - for (let i of arr) { console.log(i);}
    - Kết quả: 0 1 2
- Vòng lặp for...in được sử dụng để duyệt qua các key (chỉ số hoặc thuộc tính) của một đối tượng.
  - Ví dụ
    - const obj = {a: 1, b: 2, c: 3};
    - for (let key in obj) {console.log(key);}
    - Kết quả: a b c
## Vòng lặp for...of
- Cú pháp: for(const item of <tên_biến_của_mảng>) {//code ở đây}
- Trong đó:
  - item: là tên của hằng số sẽ được khởi tạo trong mỗi lần lặp
  - <tên_biến_của_mảng> là tên biến chứa mảng
- Vòng lặp for...of được sử dụng để duyệt qua giá trị của từng phần tử trong mảng, không quan tâm đến chỉ số của từng phần tử
- Lặp qua các chuỗi: chuỗi cũng có thể được coi là một dãy các ký tự, vì vậy có thể sử dụng for...of để lặp qua từng ký tự trong chuỗi 
- Ví dụ:
    - let arr = ["a", "b", "c"];
    - for (let i of arr) {console.log(i);}
    - Kết quả a b c
- Ví dụ 2:
    - const str='Hello'
    - for (const char of str) {console.log(char)}
    - Kết quả H e l l o
## Break
- Dùng để thoát khoải vòng lặp hoặc mệnh đề switch. Thường kết hợp với một điều kiện để dừng vòng lặp sớm hơn khi đã khỏa mãn điều kiện
- break thường được dùng khi bạn muốn tìm kiếm một giá trị cụ thể trong một mảng hoặc một tập hợp dữ liệu và bạn muốn dừng lại khi tìm thấy giá trị đó
- Sử dụng break giúp tránh việc thực hiện các phép tính không cần thiết sau khi đã đạt được mục tiêu
- Khi sử dụng break trong các vòng lặp lồng vào nhau, nó chỉ thoát khỏi vòng lặp gần nhất chứa nó
## Continue
- continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp
tiếp theo.
- continue giúp bạn bỏ qua một số trường hợp cụ thể trong vòng lặp mà không cần thoát khỏi vòng lặp hoàn toàn

# String ulti function
## trim()
- Dùng để loại bỏ khoảng trắng ở đầu và ở cuối chuỗi. Khoảng trắng bao gồm dấu cách, dấu tab, các kí tự không in khác
## toLowerCase() và toUperCase()
- toLowerCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường.
- toUpperCase() chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa.
## includes()
- kiểm tra xem một chuỗi có chứa một chuỗi con
(substring) hay không.
- Nó trả về true nếu tìm thấy và false nếu không.
## replace()
- Phương thức replace() dùng để thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.
- Bạn có thể thay thế chỉ chuỗi đầu tiên hoặc tất cả chuỗi con bằng cách sử dụng biểu thức chính quy.
## split()
- chia một chuỗi thành một mảng các chuỗi con, dựa trên một ký tự (delimiter).
- Ví dụ:
    - let str = "JavaScript is awesome!";
    - let words = str.split(" ");
    - console.log(words); // Kết quả:["JavaScript", "is", "awesome!"]
## substring()
- Trả về một phần của chuỗi, bắt đầu từ chỉ số
(index) được chỉ định đến một chỉ số khác hoặc đến cuối chuỗi.
- Ví dụ: 
  - let str = "Hello World!";
  - console.log(str.substring(0, 5)); // Kết quả: "Hello"
  - console.log(str.substring(6)); // Kết quả: "World!"
## indexOf()
- Trả về vị trí xuất hiện đầu tiên của một chuỗi con trong chuỗi, hoặc -1 nếu không tìm thấy.
- Ví dụ
  - let str = "Hello World!";
  - console.log(str.indexOf("World")); // Kết quả: 6
  - console.log(str.indexOf("JavaScript")); // Kết quả: -1

# Array ulti function
## map()
- Tạo ra một mảng mới bằng cách áp dụng một hàm lên từng phần tử mảng gốc
- Ví dụ:
  - let numbers = [1, 2, 3, 4];
  - let squared = numbers.map(num => num * 2);
  - console.log(squared); // Kết quả: [2, 4, 6, 8]
## filter()
- Tạo ra một mảng mới chỉ bao gồm các phần tử
thỏa mãn điều kiện được chỉ định trong hàm callback.
- Ví dụ: 
  - let numbers = [1, 2, 3, 4];
  - let evenNumbers = numbers.filter(num => num % 2 === 0);
  - console.log(evenNumbers); // Kết quả: [2, 4]
## find()
- Trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn điều kiện được chỉ định trong hàm callback, nếu không có phần tử nào thỏa mãn thì trả về undefined.
- Ví dụ
  - let numbers = [1, 2, 3, 4];
  - let firstEven = numbers.find(num => num % 2 === 0);
  - console.log(firstEven); // Kết quả: 2
## reduce()
- Áp dụng một hàm lên từng phần tử của mảng (từ trái qua phải) để trả về một giá trị duy nhất
- Ví dụ:
  - let numbers = [1, 2, 3, 4];
  - let sum = number.reduce((total,number) => total + number, 0)
  - console.log(sum); // Kết quả: 10
- Giải thích
  - total: biến nhận giá trị duy nhất
  - num: phần tử của mảng
  - 0 giá trị khởi tạo cho biến total
## some()
- Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được chỉ định trong hàm callback. Trả về true nếu tìm thấy, ngược lại trả về false.
- Ví dụ
  - let numbers = [1, 2, 3, 4];
  - let hasEven = numbers.some(num => num % 2 === 0);
  - console.log(hasEven); // Kết quả: true
## every()
- Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được chỉ định trong hàm callback hay không. Trả về true nếu tất cả đều thõa mản, ngược lại trả về false
- Ví dụ
  - let numbers = [2, 4, 6, 8];
  - let allEven = numbers.every(num => num % 2 === 0);
  - console.log(allEven); // Kết quả: true
## push()
- Thêm một hoặc nhiều phần tử vào cuối mảng và
trả về độ dài mới của mảng.
## shift()
- Loại bỏ phần tử đầu tiên của mảng và trả về phần tử bị loại bỏ. Phương thức này thay đổi độ dài của mảng
- Ví dụ 
  - let numbers = [1, 2, 3];
  - let firstElement = numbers.shift();
  - console.log(firstElement); // Kết quả: 1
  - console.log(numbers); // Kết quả: [2, 3]
## sort()
- Sắp xếp các phần tử của mảng theo thứ tự tăng dần hoặc theo hàm so sánh được cung cấp. Nó thay đổi mảng ban đầu.
- mặc định sắp xếp các phần tử của mảng như chuỗi theo thứ tự từ điển học Unicode (ASCII hoặc UTF-16). Điều này có nghĩa là mỗi phần tử sẽ được chuyển đổi thành chuỗi (nếu không phải là chuỗi) trước khi so sánh
- Ví dụ
  - let numbers = [4, 2, 3, 1];
  - numbers.sort();
  - console.log(numbers); // Kết quả: [1, 2, 3, 4]