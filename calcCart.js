const rawItemPrice = "45000"; // cho hàm tiếp nhận giá trị được chuỗi 
const rawItemQuantity = "2";
const rawBaseDeliveryFee = "16000";
const rawDeliveryDistance = "3.2";
const comboDiscountPercent = 10; // giảm 10% tổng tính tiền món 
// ép tường minh để dảm bảo an toàn dù phép *
const rawSubtotal = Number(rawItemPrice) * Number(rawItemQuantity);
const discountAmount = (rawSubtotal * comboDiscountPercent) / 100;
const foodTotalAfterDiscount = rawSubtotal - discountAmount;

// sửa lỗi. ép kiểu chuỗi thành ôố bằng numbẻ 
const deliveryFee = Number(rawBaseDeliveryFee) + (Number(rawDeliveryDistance) * 4000);

const finalPayment = foodTotalAfterDiscount + deliveryFee;

console.log(`Tiền món sau giảm: ${foodTotalAfterDiscount} VND`);
console.log(`Phí giao hàng: ${deliveryFee} VND`);
console.log(`Tổng thanh toán: ${finalPayment} VND`);

