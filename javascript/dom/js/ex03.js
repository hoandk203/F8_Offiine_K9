var contentEl= document.querySelector('.content');

//1. innerHTML: lay het ca ten the html, khoang trang
// console.log(contentEl.innerHTML);
// contentEl.innerHTML= `<h1>Hoc lap trinh</h1>`
// console.log(contentEl.innerHTML);

//2. innerText: chi lay text, khong lay ten the html, xoa het khoang trang thua
// console.log(contentEl.innerText);

// contentEl.innerText= `<h1>hoc lap trinh abc</h1>`
// console.log(contentEl.innerText);

//3. textContent: chi lay text, khong lay ten the html, nhung giu lai khoang trang
// console.log(contentEl.textContent);
// contentEl.textContent= `              <h1>hoc lap trinh abc</h1>`
//gan' vao the nao thi trong html y nhu vay

//4. outerHTML: lay ca chinh no (ten the, text, khoang trang)
// console.log(contentEl.outerHTML);
// contentEl.outerHTML= `<h1>hoc lap trinh abc</h1>`

// var btnAn= document.querySelector('.btn');
// var content= contentEl.innerHTML;
// btnAn.addEventListener('click', changeBtnText)
// btnAn.addEventListener('click', hideText)

// function changeBtnText(){
//     if(btnAn.innerText=== 'Hien'){
//         btnAn.innerText= 'An';
//     }else{
//         btnAn.innerText= 'Hien';
//     }
    
// }

// function hideText(){
    
//     if(contentEl.innerHTML){
//         contentEl.innerHTML= '';
//     }else{
//         contentEl.innerHTML= content;
//     }
// }

//////////////////////////////////////////////////////////////////////

// var btnMinus= document.querySelector('.minus-btn');
// var btnPlus= document.querySelector('.plus-btn');
// var number= document.querySelector('.number');

// btnMinus.addEventListener("click", function(){
//     // var count= number.innerText;
//     // --count;
//     // number.innerText= count;

//     --number.innerText;
// })

// btnPlus.addEventListener("click", function(){
//     // var count= number.innerText;
//     // ++count;
//     // number.innerText= count;

//     ++number.innerText;
// })

//////////////////////////////////////////////////////////////////////
//1. ap dung cac thuoc tinh hop le
// cu phap: element.tenthuoctinh
var linkEl= document.querySelector('a')
// console.log(linkEl.href);
// console.log(linkEl.target);
// console.log(linkEl.id);
// console.log(linkEl.title);
// console.log(linkEl.className);

// linkEl.href = "https://google.com"
// linkEl.className= 'link-text'
// linkEl.style= "background: yellow"

//2. ap dung voi thuoc tinh tu tao
//getAttribute(tenthuoctinh)
//setAttribute(tenthuoctinh, giatri)

// console.log(linkEl.getAttribute("v-name"));
// linkEl.setAttribute("v-name", "Hoandk203")
// console.log(linkEl.getAttribute("v-name"));

//3. Data Attribute: data-*
// console.log(linkEl.getAttribute("data-index"));

// console.log(linkEl.dataset.index);
// linkEl.dataset.index= 'ahihi'
// console.log(linkEl.dataset.index);

// Gia su: data-animation-duration
// linkEl.dataset.animationDuration= '1s'

//data-animation-timing-function
// linkEl.dataset.animationTimingFunction= 'ease'

//Xoa data attribute
// delete linkEl.dataset.index;

//Xoa cac loai thuoc tinh => removeAttribute(tenthuoctinh)
// linkEl.removeAttribute("target")

//Xoa the html
// linkEl.remove();

var websiteEl= document.querySelector('.website')
websiteEl.addEventListener('change', function(){
    var value= this.value;
    if(value){
        window.open(value);
    }
})