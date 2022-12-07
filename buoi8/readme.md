// --- BIẾN ----
var x; // không có scope, có thể khai báo lại và truy cập bởi đối tượng window
let y; // Có scope, hoisting ở vùng dead zone, cần phải khai báo trc khi sử dụng, k đc khai báo lại
const z = 1; /*   Có scope, k gán lại được, có thể thêm phần tử mảng, thay đổi giá trị, phải khai báo trước khi sd, k đc khai báo lại
  Gán lại giá trị cũng k hợp lệ,  hoisting ở vùng dead zone,


// --- TOÁN TỬ ----

1. Toán tử số học - Arithmectic Operators
+	Cộng
-	Trừ
*	Nhân
**	Lũy thừa (ES6)
~~  Làm tròn lấy phần nguyên
/	Phép chia
%	Phép chia lấy phần dư
++	Tăng một giá trị
--	Giảm một giá trị

2. Toán tử so sánh - Comparison Operators
==	So sánh bằng theo giá trị
===	So sánh bằng theo cả kiểu dữ liệu và giá trị
!=	So sánh không bằng theo giá trị
!==	So sánh không bằng theo cả kiểu dữ liệu và giá trị
>	So sánh lớn hơn
<	So sánh bé hơn
>=	So sánh lớn hơn hoặc bằng
<=	So sánh bé hơn hoặc bằng
?	Toán tử ba ngôi

3. Toán tử logic - Logical Operators
&&	Toán tử và (còn được gọi là toán tử AND)
||	Toán tử hoặc (còn được gọi là toán tử OR)
!	Toán tử phủ định

4. Toán tử gán - Assignment Operators
=	a = b	a = b
+=	a += b	a = a + b
-=	a -= b	a = a - b
*=	a *= b	a = a * b
/=	a /= b	a = a / b
%=	a %= b	a = a % b
**=	a **= b	a = a**b