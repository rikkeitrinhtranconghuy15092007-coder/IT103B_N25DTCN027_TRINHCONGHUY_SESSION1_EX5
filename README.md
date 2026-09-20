# Bài tập: Sửa lỗi tính tiền giỏ hàng

## 1. Tại sao ban đầu code lại tính ra số tiền khổng lồ?

Khi tính toán, máy tính đã bị hiểu nhầm do dữ liệu đầu vào là dạng chữ thay vì số.

* **Bước 1 (Vẫn tính đúng):** Code lấy số km nhân tiền cước: `3.2 * 4000 = 12800`.
* **Bước 2 (Bắt đầu sai):** Code lấy phí cơ bản cộng tiền cước vừa tính: `"16000" + 12800`. 
Do `"16000"` ban đầu đang ở dạng chữ, nên khi gặp dấu cộng (+), máy tính không làm toán mà thực hiện hành động **ghép chữ**. Nó dán 2 số lại với nhau thành: `"1600012800"`.
* **Bước 3 (Sai dây chuyền):** Khi tính tổng hóa đơn, máy tính lấy tiền món ăn cộng với chuỗi chữ `"1600012800"`, tiếp tục dán lại thành số khổng lồ `"810001600012800"`.

**Cách khắc phục:** 
Em đã dùng lệnh `Number()` bao quanh các biến chữ để ép nó biến thành biến số học (ví dụ: `Number("16000")` sẽ ra số `16000`). Từ đó máy tính sẽ thực hiện phép cộng trừ bình thường.

---

## 2. Bảng kết quả chạy thử (Test Cases)

| Tình huống | Dữ liệu ban đầu | Kết quả bị lỗi ban đầu | Kết quả đúng (sau khi sửa code) |
| :--- | :--- | :--- | :--- |
| **1. Đặt khoảng cách lẻ (3.2 km)** | Phí cơ bản: "16000"<br>Số km: "3.2"<br>Giá món: "45000"<br>Số lượng: "2" | Tiền món: 81000 VND<br>Phí ship: 1600012800 VND<br>**Tổng bill: 810001600012800 VND** | Tiền món: 81000 VND<br>Phí ship: 28800 VND<br>**Tổng bill: 109800 VND** |
| **2. Đặt khoảng cách chẵn (5 km)** | Phí cơ bản: "15000"<br>Số km: "5"<br>Giá món: "50000"<br>Số lượng: "1" | Tiền món: 45000 VND<br>Phí ship: 1500020000 VND<br>**Tổng bill: 450001500020000 VND** | Tiền món: 45000 VND<br>Phí ship: 35000 VND<br>**Tổng bill: 80000 VND** |