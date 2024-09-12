// DOM CSS

// var h1El= document.querySelector('h1')
// // h1El.style.color= 'red'
// // h1El.style.backgroundColor= 'yellow'
// // h1El.style.height= '300px'

// var css= {
//     color: 'red',
//     backgroundColor: 'pink',
//     height: '200px',
//     backgroundImage: 'url(https://picsum.photos/200/300)',
//     transform: 'translateX(200px)',
//     backgroundRepeat: 'no-repeat',
// }

// Object.assign(h1El.style, css)
// console.log(h1El.style);

// h1El.style.color= null
// h1El.style.backgroundImage= 'https://picsum.photos/200/300'

//them 2 thuoc tinh sau
//backgroundImage => tu thiet lap 1 anh bat ky
//transform:translateX(200px)

var para= document.querySelector('.para')
var fadeIn= document.querySelector('.fade-in')
var fadeOut= document.querySelector('.fade-out')

fadeOut.addEventListener("click", function(){
    var cssPara={
        opacity: '0',
        transition: '0.2s linear'
    }
    
    setTimeout(function(){
        para.style.display= 'none'
    },200)
    Object.assign(para.style, cssPara)
})

fadeIn.addEventListener("click", function(){
    var cssPara={
        opacity: '1',
    }
    para.style.display= 'block'
    setTimeout(function(){
        Object.assign(para.style, cssPara)
    },100)
})