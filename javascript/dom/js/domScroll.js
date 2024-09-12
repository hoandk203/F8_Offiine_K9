//DOM scroll

//window.scrollX (window.scrollY): lay vi tri scroll theo truc X, y
// window.addEventListener("scroll", function(){
//     console.log(`scrolling`, window.scrollY);
//     console.log(`scrollingx`, window.scrollX);
    
// })
/*
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
}) //chuyen thanh cuon den vi tri da thiet lap
 */

//////////////////////////////////////////////////////////////////
// var body= document.querySelector('body')
// var before= 0
// window.addEventListener("scroll", function(){
//     if(before < window.scrollY){
//         body.style.backgroundColor= 'red'
//     }else{
//         body.style.backgroundColor= null
//     }
//     before= window.scrollY
    
    
    
// })

//////////////////////////////////////////////////////////////

// var btn= document.querySelector('.btn')

// btn.addEventListener('click', function(){
//    window.scroll({
//     top: 500,
//     behavior: "smooth"
//    })
// })

///////////////////////////////////////////////////////

// var btn= document.querySelector('.btn')
// var before= 0
// window.addEventListener("scroll", function(){
//     if(window.scrollY > 100){
//         btn.classList.add('show')
//     }else{
//         btn.classList.remove('show')
//     }
    
// })

// btn.addEventListener("click", function(){
//     window.scroll({
//         top: 0,
//         behavior: "smooth"
//     })
// })

/////////////////////////////////////////////////////////////////

// var sectionsList=[
//     {
//         title: `Section 1`,
//         text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos debitis expedita minus maxime, modi ratione cum est iusto reiciendis cumque vel. Vero quae quia et totam odio libero magnam.`
//     },
//     {
//         title: `Section 2`,
//         text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos debitis expedita minus maxime, modi ratione cum est iusto reiciendis cumque vel. Vero quae quia et totam odio libero magnam.`
//     },
//     {
//         title: `Section 3`,
//         text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos debitis expedita minus maxime, modi ratione cum est iusto reiciendis cumque vel. Vero quae quia et totam odio libero magnam.`
//     }
// ]
// var header= document.querySelector('header')
// var container= document.querySelector('.container')
// sectionsList.forEach(function(section, index){
//     container.innerHTML += `
//         <section >
//             <h2>${section.title}</h2>
//             <p>${section.text}</p>
//         </section>
//     `
//     header.innerHTML +=`
//         <button>Section ${index+1}</button>
//     `
// })
var sections= document.querySelectorAll('section')
var btns= document.querySelectorAll('header button')

btns.forEach(function(btn, indexBtn){
    btn.addEventListener('click', function(){
        var target= btn.dataset.target
        var sectionEl= document.querySelector(target)
        var sectionOffsetTop= sectionEl.offsetTop
        window.scroll({
            top: sectionOffsetTop,
            behavior: "smooth"
        })
    })
})

const observer= new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            btns.forEach(function(btn){
                var target= btn.dataset.target
                if(entry.target.id === target.slice(1)){
                    btn.classList.add('red')
                }else{
                    btn.classList.remove('red')
                }
            })
        }
    })
}, {
    threshold: 0.7
})

sections.forEach(function(section){
    observer.observe(section)
})

// tạo object observer
// var observer= new IntersectionObserver(function(entries){
//     if(entries[0]){
//         console.log(`section3`);
        
//     }
    
// },{
//     threshold:0.5
// })

// var section3= document.querySelector('#section-3')
// observer.observe(section3)
