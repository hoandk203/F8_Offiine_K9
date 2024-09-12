// var form= document.querySelector('form')
// var todoList= document.querySelector('.todo-list')

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     var inputEl= this.querySelector('input')
//     var value= inputEl.value
//     if(value){
//         var p= document.createElement('p')
//         p.innerText= value
//         todoList.append(p)
//         inputEl.value= ''
//     }
// })

//DOMContentLoaded: khi cây DOM được tải
//load

// document.addEventListener('DOMContentLoaded', function(){
//     var h1= document.querySelector('h1')
//     console.log(h1); 
// })

window.addEventListener('load', function(){
    var overlay= document.querySelector('.overlay-loading')
    overlay.style.opacity= `0`
    overlay.style.visibility= `hidden`
    overlay.style.transition= `all 1s ease`
})

//buổi sau: scroll
//IntersectionObserver