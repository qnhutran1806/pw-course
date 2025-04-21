import { test } from '@playwright/test';

test("Personal Notes Page", async ({ page }) => {
    await test.step('Go to Bài học 3: To do list ', async () => {
        await page.goto('https://material.playwrightvn.com/')
    })
    await test.step('Click Bài học 4', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })
    const notes = [
        {
            title: 'Giải mã bí ẩn hố đen vũ trụ',
            content: 'Các nhà khoa học đang nghiên cứu cách hố đen ảnh hưởng đến vật chất xung quanh. Phát hiện mới giúp hiểu rõ hơn về sự hình thành của thiên hà.'
        },
        {
            title: 'AI viết thơ như người thật',
            content: 'Một nhóm nghiên cứu vừa phát triển AI có thể sáng tác thơ. Điều này đặt ra câu hỏi về ranh giới giữa sáng tạo con người và máy móc.'
        },
        {
            title: 'Vi khuẩn cổ đại hồi sinh',
            content: 'Các nhà khoa học đã tái tạo thành công một chủng vi khuẩn từ hàng triệu năm trước. Đây là bước tiến lớn trong sinh học cổ đại.'
        },
        {
            title: 'Năng lượng từ ánh sáng mặt trăng',
            content: 'Một công nghệ mới hứa hẹn khai thác năng lượng từ ánh sáng mặt trăng. Mặc dù còn xa thực tiễn, nhưng mở ra hướng đi mới cho năng lượng tái tạo.'
        },
        {
            title: 'Kính thiên văn siêu nhạy sắp ra mắt',
            content: 'Kính thiên văn mới có khả năng phát hiện tín hiệu từ các hành tinh ngoài hệ Mặt Trời. Sẽ được phóng vào năm 2025.'
        },
        {
            title: 'Robot nông nghiệp trồng rau thông minh',
            content: 'Robot có thể tự xác định thời điểm gieo trồng và tưới nước. Giúp tiết kiệm chi phí và tăng năng suất nông nghiệp.'
        },
        {
            title: 'Pin sinh học sạc bằng máu',
            content: 'Một loại pin mới có thể sạc từ glucose trong máu, tiềm năng ứng dụng trong y học như thiết bị cấy ghép.'
        },
        {
            title: 'Tàu vũ trụ chạm vào Mặt Trời',
            content: 'Tàu Parker Solar Probe đã tiến gần Mặt Trời hơn bao giờ hết, giúp thu thập dữ liệu chưa từng có về vành nhật hoa.'
        },
        {
            title: 'Máy in 3D xây nhà trong 24h',
            content: 'Công nghệ in 3D giúp tạo ra ngôi nhà chỉ trong một ngày, mở ra khả năng xây dựng nhà ở giá rẻ, nhanh chóng.'
        },
        {
            title: 'Siêu máy tính mô phỏng não người',
            content: 'Dự án mô phỏng cấu trúc và hoạt động của não người bằng siêu máy tính lớn nhất thế giới vừa hoàn thành giai đoạn 1.'
        }
    ];

    for (const note of notes) {
        await test.step('Input title', async () => {
            await page.locator("//input[@id='note-title']").fill(note.title);
        });

        await test.step('Input content', async () => {
            await page.locator("//textarea[@id='note-content']").fill(note.content);
        });

        await test.step('Click Add button', async () => {
            await page.locator("//button[@id='add-note']").click();
        });
    }
    const searchKeyword = notes[2].title;
    await page.locator("//input[@id='search']").fill(searchKeyword);

})