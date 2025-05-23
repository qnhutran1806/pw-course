# DOM
- Thẻ div (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ h1 đến h6 (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ form: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
  - thead = table heading
    - tr = table row = 1 dòng
      - th: table heading: text in đậm
  - tbody
    - tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
# Playwright
- Selector là cách chọn phần tử trên trang
- Có nhiều kiểu
  - Xpath selector
  - CSS selector
  - Playwright selector
- XPath = XML Path
- Có 2 loại:
  -   Tuyệt đối: đi dọc theo cây DOM
      - Bắt đầu bởi 1 /
  - Tương đối: tìm dựa vào đặc tính
    - Bắt đầu bởi 2 //
    - //tenthe[@thuoctinh=”giatri”]
## Playwright syntax basic
- Đơn vị cơ bản để khai báo một test
  - import { test } from '@playwright/test';
  - test('<tên test>', async ({ page }) => {// Code của test});
- Đơn vị nhỏ hơn test, để khai báo từng step của test case
  - await test.step('Tên step', async () => {// Code here});
  - test('<tên test>', async ({ page }) => {await test.step('Tên step', async () => {// Code here});});
- Basic action
  - Navigate: await page.goto('Xpath');
  - Click
    - Single click: await page.locator("//button").click();
    - Double click: await page.locator("//button").dblclick();
    - Click chuột phải: page.locator("//button").click({button: 'right'})
    - Click chuột kèm bấm phím khác: page.locator("").click({modifiers: ['Shift'],})
  - Input
    - **Fill()**: page.locator("//input").fill('Playwright Viet Nam'); *paste content vào ô input*
    - **PressSequentially()**: page.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100,}); *gõ từng chữ vào ô input*
  - Radio button / checkbox
    - *Lấy giá trị hiện tại đang là check hay không*
      - **const isChecked = page.locator("//input").isChecked();**
    - *Chọn (tick) nếu chưa được tick*
      - **page.locator("//input").check();**
    - *ép checkbox hoặc radio về trạng thái được chọn (true) hoặc không được chọn (false).*
      - Nếu gọi setChecked(..., false) cho radio button thì không có tác dụng, vì radio không thể "bỏ chọn" thủ công như checkbox được – chỉ chọn radio khác để thay thế.
      - **page.locator("//input").setChecked(false/true);**
  - Hover
    - **await page.locator("//input").hover();**
  - Text()
    - để tìm ra phần tử có giá trị tương ứng
    - VD: DOM:
    - <div @class=”playwright”>This is a text</div>
    - **//div[text()='This is a text']**
  - contain()
    - Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text
    - VD:
    - <div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi
    - <div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web 
    - **contains(<giá trị>, <giá trị contains>)**. 
    - //div[contains(text(), ‘Tôi là Alex’)]
    - //div[contains(text(), ‘Bây giờ là:’)]
  - confirm dialog 
    - **page.once('dialog', async (dialog) => {await dialog.accept();});**