// //classlist
// var titleEl= document.querySelector('#title')
// console.log(titleEl.classList);

// //add() => them class cho element
// titleEl.classList.add("title-1", "title-2", "title-3");

// //remove() : xoa class khoi element
// titleEl.classList.remove("title-1", "title-3")

// //replace(): thay the class cu thanhf class moi
// titleEl.classList.replace("title-2", "title-4")

// //toggle(): them class neu khong ton tai, xoa neu ton tai
// titleEl.classList.toggle("title")
// titleEl.classList.toggle("title")

// //contains(): kiem tra class co ton tai hay khong, tra ve true,false
// console.log(titleEl.classList.contains("title-4"));

////////////////////////////////////////////////////////////////////
//giao dien sang toi
var switchToggle= document.querySelector('.switch-theme');
var h1El= document.querySelector('.text');
var bodyEl= document.querySelector('body');

switchToggle.addEventListener('click', function(){
    if(switchToggle.innerText=== "Dark theme"){
        switchToggle.innerText= "Light theme"
    }else{
        switchToggle.innerText= "Dark theme"
    }
    bodyEl.classList.toggle("bg-dark")
    h1El.classList.toggle('white-text')
})

////////////////////////////////////////////////////////
//ap dung cho danh sach ( dung forEach lap qua tung phan tu roi lang nghe)
var items= document.querySelectorAll('ul li')
items.forEach(function(itemEl){
    itemEl.addEventListener('click', function(){
        this.classList.toggle('active')
    })
})

var btnClear= document.querySelector('.clear-btn')

btnClear.addEventListener('click', function(){
    items.forEach(function(itemEl){
        itemEl.classList.remove('active')
    })
})