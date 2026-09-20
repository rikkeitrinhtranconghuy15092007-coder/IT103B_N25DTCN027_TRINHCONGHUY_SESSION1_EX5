// Dữ liệu ban đầu (bị dạng chữ)
const rawItemPrice = "45000";
const rawItemQuantity = "2";
const rawBaseDeliveryFee = "16000";
const rawDeliveryDistance = "3.2";
const comboDiscountPercent = 10;

// BƯỚC SỬA LỖI: Dùng Number() để biến tất cả dữ liệu chữ thành dạng số
const itemPrice = Number(rawItemPrice);
const itemQuantity = Number(rawItemQuantity);
const baseDeliveryFee = Number(rawBaseDeliveryFee);
const deliveryDistance = Number(rawDeliveryDistance);

// 1. Tính tổng tiền món ăn và trừ đi giảm giá 10%
const rawSubtotal = itemPrice * itemQuantity;
const discountAmount = (rawSubtotal * comboDiscountPercent) / 100;
const foodTotalAfterDiscount = rawSubtotal - discountAmount;

// 2. Tính tiền ship
// Do đã ép kiểu thành số, đoạn code này sẽ thực hiện phép cộng toán học chuẩn xác
const deliveryFee = baseDeliveryFee + (deliveryDistance * 4000);

// 3. Tính tổng tiền khách phải trả
const finalPayment = foodTotalAfterDiscount + deliveryFee;

// 4. In kết quả ra màn hình Console
console.log(`Tiền món sau giảm: ${foodTotalAfterDiscount} VND`);
console.log(`Phí giao hàng: ${deliveryFee} VND`);
console.log(`Tổng thanh toán: ${finalPayment} VND`);