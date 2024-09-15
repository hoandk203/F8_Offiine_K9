-   khi vao shopee
    -> login
    -> tat app
    -> vao lai shopee
    -> van dang dang nhap
    -> cau hoi: co cai gi de luu - local storage - session storage - cookies
-   diem chung
    chuc nang: luu tru thong tin

-   diem khac
    -   cookie co the duoc gen ra tu server hoac client
    -   thoi han
        -   local: vinh vien
        -   session: toi khi trinh duyet tat
        -   cookie: co the tuy chinh
    -   thao tac voi server
        -   cookie: tu gui qua cookie header
        -   local, session: khong server
    -   dung luong
        -cookie: luu tru duoc 4kb
        -   local, session: 5MB
    -   truy cap
        -   cookie, local: tat ca cua so deu co the truy cap
        -   session: chi tab do truy cap duoc

TOKEN

-   1 chuoi string co tac dung xac thuc nguoi dung
-   co rat nhieu loai token
-   quan tam den jwt

jwt co 3 thanh phan:

-   header
-   playload
-   sign

quy trinh login

-   nhap user, password
-   call api login Post
-   {
    'access_token': string,
    'refresh_token': string
    }
