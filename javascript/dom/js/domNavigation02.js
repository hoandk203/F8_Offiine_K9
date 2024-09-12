
// var liSub= document.querySelectorAll('.sub-menu')

// liSub.forEach(function(li){
//     li.addEventListener("click", function(){
//         var ulSub= li.querySelector('ul')
//         ulSub.classList.toggle('block')
//         var icon= li.querySelector('div i')
//         icon.classList.toggle('rotate180')
        
//         var ulSub1= document.querySelectorAll('.sub-menu ul')
//         ulSub1.forEach(function(ul1){
//             if(ul1.className.includes('block')){
//                 ul1.classList.toggle('block')
//             }
//         })
//         ulSub.classList.toggle('block')
//     })
// })

var items= document.querySelectorAll('.menu li a')

items.forEach(function(item){
    var subMenu= item.nextElementSibling
    item.addEventListener("click", function(e){
        e.preventDefault();
        if(subMenu){
            var menuActive= document.querySelector
        }
    })
})