## 1. Phân tích lỗi 
Nguyên nhân dẫn đến hóa trị giá hàng trăm triệu đồng như nằm ở chỗ java đang hiểu biểu thức const deliveryFee = `rawBaseDeliveryFee + rawDeliveryDistance * 4000` :
 1. Thì sẽ ưu tiên toán từ Nhân trước vò nó có độ ưu tiên cao hơn so với + Lên là biểu thức nhân của phép tính sẽ được thực hiện trước 

 2. java còn tự động ép kiểu chuỗi để tính toán phép nhân lên kết quả thành 12800

 3. lỗi cộng chuỗi: biểu thức lúc này trở thành '"16000" + 12800' vì o hàng đầu tiên của nó là chuỗi thhàn ra toán tử '+' không thực hiện tính tônghr mà đóng vai trò là toán tử nối chuỗi khi đó nó sẽ tạo thành 1 chuỗi số dài chứ nó không có '+' vào 
4. lan chuyền lỗi: khi tính tổng cuối cùng, thì số'81000' tiếp tục làm ra chuỗi ớn lên thành ra nó lại thành 1 dãy số cực kì dài 

## 2. Bảng kiểm thử đối chứng (Test Cases)

| Trường hợp kiểm thử (Test Case) | Dữ liệu đầu vào (Input) | Kết quả sai thực tế (Bug) | Kết quả đúng mong đợi (Expected) |
| :--- | :--- | :--- | :--- |
| **#1: Tính cước phí giao hàng** (Phí cơ bản + Phí theo km) | `rawBaseDeliveryFee = "16000"`<br>`rawDeliveryDistance = "3.2"` | `"1600012800" VND` | `28800 VND` |
| **#2: Tính tổng thanh toán** (Tiền món đã giảm + Phí giao hàng) | `foodTotalAfterDiscount = 81000`<br>`deliveryFee = "1600012800"` | `"810001600012800" VND` | `109800 VND` |

## 3. Cách khắc phục
Ép kiểu tường minh (Explicit Type Coercion) biến chuỗi thành số học bằng hàm `Number()` trước khi thực hiện phép tính có chứa dấu `+`.
