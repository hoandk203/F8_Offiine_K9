SPA

cấu trúc

<div id="app"></div>
<script></script>

so sánh
reactjs | vue

js render html html -> js
phổ biến hơn ít phổ biến hơn
phức tạp hơn đơn giản hơn
fb chống lưng cộng đồng trung/nhật chống lưng

khi dùng SPA -> khó để SEO
SPA phù hợp với web không cần SEO

-   web quản lý kho
-   web kế toán
-   web app nội bộ
-   web chuyển đổi số

tạo dự án reactjs
b1: npm create vite
b2: chọn reactjs

component: là một thành phần có thể tái sử dụng nhiều nơi
cd: component FButton hiện tại luôn hiện text là "f button"
nhưng nhiều chỗ khác mình muốn hiện text khác (login, save...)
-> solution: truyền biến vào
-> gọi là props
