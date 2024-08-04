//DOM Navigation
/*
chon cac element cha, con , anh em
- parentElement => chon thanh phan cha gan nhat
- children => chon tat ca thanh phan con cap 1 (tra ve 1 danh sach)
- nextElementSibling => chon thanh phan ke tiep (ben phai)
- previousElementSibling => chon thanh phan phia truoc (ben trai)

- parentNode
- childNodes
- nextSibling
- previousSibling
- element chi la the html thoi, Node la moi thu ke ca space, comment

- firstChild
- lastChild
- firstElementChild
- lastElementChild

 */

// var h2El= document.querySelector('h2')
// console.log(h2El);
// console.log(h2El.parentElement);

// var wrapperEl= document.querySelector('.wrapper')
// console.log(wrapperEl.children[0].children[0]);

// var firstEl= document.querySelector('.product h2')
// console.log(firstEl.nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling);

// console.log(document.body.children);

// var productEl= document.querySelector('.products')

// console.log(productEl.lastElementChild);

// has-children

var liEl= document.querySelectorAll('.menu li')


liEl.forEach(function(li){
    console.log(li.children);
    if(li.children[1] === 'ul'){
        li.parentElement.classList.add('has-children1')
    }
})


var items= document.querySelectorAll('ul a')

items.forEach(function(item){
    if(item.nextElementSibling){
        item.parentElement.classList.add('has-children')
    }
})