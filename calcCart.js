// Tiếp nhận dữ liệu giỏ hàng dạng chuỗi thô từ hệ thống
const rawItemPrice = "45000";
const rawItemQuantity = "2";
const rawBaseDeliveryFee = "16000";
const rawDeliveryDistance = "3.2";
const comboDiscountPercent = 10; // Giảm 10% tổng tiền món

// BƯỚC SỬA LỖI: Ép kiểu dữ liệu chuỗi thô về dạng Số học (Number)
const itemPrice = Number(rawItemPrice);
const itemQuantity = Number(rawItemQuantity);
const baseDeliveryFee = Number(rawBaseDeliveryFee);
const deliveryDistance = Number(rawDeliveryDistance);

// 1. Tính tổng tiền món ăn và giảm giá combo
const rawSubtotal = itemPrice * itemQuantity;
const discountAmount = (rawSubtotal * comboDiscountPercent) / 100;
const foodTotalAfterDiscount = rawSubtotal - discountAmount;

// 2. Tính cước vận chuyển (16.000đ cơ bản + 4.000đ/km)
// Do baseDeliveryFee và deliveryDistance đã là kiểu Number, toán tử + sẽ thực hiện phép cộng toán học
const deliveryFee = baseDeliveryFee + (deliveryDistance * 4000);

// 3. Quyết toán hóa đơn thanh toán
const finalPayment = foodTotalAfterDiscount + deliveryFee;

// 4. Xuất kết quả kiểm tra
console.log(`Tiền món sau giảm: ${foodTotalAfterDiscount} VND`);
console.log(`Phí giao hàng: ${deliveryFee} VND`);
console.log(`Tổng thanh toán: ${finalPayment} VND`);