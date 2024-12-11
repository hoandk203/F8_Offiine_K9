-   useState
-   userEffect

ban đầu khai báo let count= 0
function App được gọi thì giao diện FE hiển thị count = 0 (chuẩn)
khi click vào nút "increment" thì count có tăng lên 1 đơn vị
(\*) giao diện không đổi do function App đã được run từ trước rồi và nó không chạy lại
Solution: có cách nào đó để ép function App được gọi lại (reload/ re-render)
==> ueState ra đời giải quyết
useState trả về 2 phần tử + phần tử đầu trả về biến lưu giá trị tức thời + phẩn tử 2: function để cập nhật lại giá trị cho biến 1 + truyền vào 1 giá trị default

khi tawng bieens count
setCount(count+1)
console.log(count)
sẽ log ra giá trị cũ

-> mong muốn có 1 cái gì đó để theo dõi
