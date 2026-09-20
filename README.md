# Phân tích Lỗi và Kiểm thử - Phân hệ Tính giá Giỏ hàng GrabRide/Food

## 1. Phân tích nguyên nhân gây lỗi
Trong biểu thức `const deliveryFee = rawBaseDeliveryFee + rawDeliveryDistance * 4000`, hiện tượng lỗi xảy ra do sự kết hợp giữa **thứ tự ưu tiên của toán tử** và **cơ chế ép kiểu tự động (Type Coercion)** trong JavaScript:

1. **Thứ tự ưu tiên toán tử:** Toán tử nhân (`*`) có mức độ ưu tiên cao hơn toán tử cộng (`+`). Do đó, phép tính `rawDeliveryDistance * 4000` được thực thi trước. 
   - Lúc này `rawDeliveryDistance` đang là chuỗi `"3.2"`. Khi gặp toán tử `*`, JavaScript tự động ép kiểu chuỗi `"3.2"` thành số `3.2` để tính toán. Kết quả của phép nhân là số `12800`.
2. **Hiện tượng cộng chuỗi (String Concatenation):** Tiếp theo, chương trình thực hiện phép cộng `rawBaseDeliveryFee + 12800`.
   - Vì `rawBaseDeliveryFee` đang được khai báo là một chuỗi (`"16000"`), toán tử `+` sẽ đóng vai trò là **toán tử nối chuỗi** thay vì phép cộng toán học. 
   - JavaScript tự động ép kiểu số `12800` thành chuỗi `"12800"` và nối vào đuôi, tạo ra chuỗi kết quả: `"16000" + "12800" = "1600012800"`.
3. **Hiệu ứng dây chuyền:** Khi tính `finalPayment`, biến `foodTotalAfterDiscount` (giá trị số `81000`) cộng với `deliveryFee` (chuỗi `"1600012800"`). Một lần nữa, toán tử `+` lại thực hiện nối chuỗi, tạo ra số tiền khổng lồ: `"810001600012800"`.

**Cách khắc phục:** Cần sử dụng hàm `Number()` hoặc `parseFloat()`, `parseInt()` để ép các giá trị đầu vào (đang ở dạng chuỗi) về đúng kiểu dữ liệu Số (Number) trước khi đưa vào các biểu thức toán học.

## 2. Bảng Test Cases đối chứng

Dưới đây là bảng kiểm thử (Test Cases) để đối chiếu giữa kết quả lúc mã nguồn bị lỗi và kết quả sau khi đã sửa chuẩn.

| ID | Trường hợp kiểm thử (Test Case) | Dữ liệu đầu vào (Input) | Kết quả lỗi (Thực tế) | Kết quả đúng (Mong đợi) |
|:---|:---|:---|:---|:---|
| TC-01 | Kiểm tra tính phí với cự ly lẻ (dữ liệu mặc định của bài toán) | `rawBaseDeliveryFee = "16000"`<br>`rawDeliveryDistance = "3.2"`<br>`rawItemPrice = "45000"`<br>`rawItemQuantity = "2"` | Tiền món: 81000 VND<br>Phí giao hàng: 1600012800 VND<br>**Tổng: 810001600012800 VND** | Tiền món: 81000 VND<br>Phí giao hàng: 28800 VND<br>**Tổng: 109800 VND** |
| TC-02 | Kiểm tra tính phí với cự ly nguyên (cự ly 5km, phí cơ bản 15000) | `rawBaseDeliveryFee = "15000"`<br>`rawDeliveryDistance = "5"`<br>`rawItemPrice = "50000"`<br>`rawItemQuantity = "1"` | Tiền món: 45000 VND<br>Phí giao hàng: 1500020000 VND<br>**Tổng: 450001500020000 VND** | Tiền món: 45000 VND<br>Phí giao hàng: 35000 VND<br>**Tổng: 80000 VND** |