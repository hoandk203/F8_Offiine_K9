# responsive web deisgn

- thiet ke web thich ung voi cac thiet bi khac nhau
- truoc khi co responsive >> dung` adaptive
- responsive sung dung CSS de thay doi giao dien, dua vao kich thuoc man hinh

# breakpoint

- diem dung kich thuoc man hinh ma tai do giao dien se thay doi
- khong co breakpoint co dinh cho moi du an
- chi co breakpoint pho bien (co the thay doi theo tung du an)

breakpoint pho bien:

≥576px
≥768px
≥992px
≥1200px
≥1400px

# media queries

- la mot at-rule co san cua CSS
``` css
    @media all | screen | print and (min-width: value) and (max-width:value){
        selector{
            code css
        }
    }
```

``` css
    @media screen and (max-width: 1399px){
        selector{

        }
    }

    @media screen and (max-width: 1199px){
        selector{

        }
    }

    @media screen and (max-width: 1991px){
        selector{

        }
    }

    @media screen and (max-width: 767px){
        selector{

        }
    }

    @media screen and (max-width: 575px){
        selector{

        }
    }
```