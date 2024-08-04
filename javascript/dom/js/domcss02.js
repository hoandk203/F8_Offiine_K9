// var btn= document.querySelector('.btn')

// btn.addEventListener("click", function(e){
//     console.log(`ClientX: ${e.clientX}`);
//     console.log(`ClientY: ${e.clientY}`);
//     console.log(`OffsetX: ${e.offsetX}`);
//     console.log(`OffsetY: ${e.offsetY}`);

//      this va e.target: this la button, target la chinh xac the html trong button neu co
// });

// var items= document.querySelectorAll('.content ul li')

// items.forEach(function(item){
//     item.addEventListener('click', function(){
//         this.style.color= 'red'
//     })
// })

// var btn= document.querySelector('.content .btn')

// var ul= document.querySelector('.content ul')
// btn.addEventListener('click', function(){
//     ul.innerHTML += `<li>Item 4</li>`

//     items= document.querySelectorAll('.content ul li')

//     items.forEach(function(item){
//         item.addEventListener('click', function(){
//             this.style.color= 'red'
//     })
// })
// })

//cach khac (su dung e.target)

// var ul= document.querySelector('.content ul')
// var btn= document.querySelector('.content .btn')

// ul.addEventListener("click", function(e){
//     if(e.target.nodeName === "LI"){
//         e.target.style.color= 'red'

//     }
// })

// btn.addEventListener("click", function(){
//     ul.innerHTML += `<li>Item 4</li>`
// })

/////////////////////////////////////////////////////////////////

var btn= document.querySelector('.btn')
var offsetXBtn;
var offsetYBtn;
btn.addEventListener('mousedown', function(e){
    if(e.which === 1){
        document.addEventListener('mousemove', handleDrag);
    }
    offsetXBtn=e.offsetX;
    offsetYBtn=e.offsetY;
    console.log(e);
})

document.addEventListener("mouseup", function(){
    document.removeEventListener('mousemove', handleDrag)
})

function handleDrag(e){
    btn.style.position= "absolute"
    btn.style.top= `${e.clientY- offsetYBtn}px`
    btn.style.left= `${e.clientX - offsetXBtn}px`
}

var leftContainer= document.querySelector('.left-container')
var rightContainer= document.querySelector('.right-container')

document.addEventListener('mousemove', function(e){
    var btnLeft= btn.style.left;
    
    console.log(parseInt(btnLeft.slice(0, -2)));
    if(parseInt(btnLeft.slice(0, -2)) <= document.body.clientWidth /2){
        leftContainer.style.backgroundColor= 'pink'
    }else{
        leftContainer.style.backgroundColor= ''
    }
})


var aEl= document.querySelector('a')

aEl.addEventListener('click', function(e){
    e.preventDefault();
    console.log(a.href);
})

document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    alert("khong chuot phai")
})

//////////////////////////////////////////////////////
// e.stopPropagation(): ngăn nổi bọt sự kiện