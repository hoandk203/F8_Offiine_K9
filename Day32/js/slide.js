
var carouselInner= document.querySelector('.carousel .carousel-inner')
var nextBtn= document.querySelector('.carousel .carousel-nav .next')
var prevBtn= document.querySelector('.carousel .carousel-nav .prev')

var carouselWidth= carouselInner.clientWidth;
var totalWidth= carouselWidth * carouselInner.children.length;
var position = 0;

nextBtn.addEventListener("click", function(e){
    if(Math.abs(position)+ carouselWidth >= totalWidth){
        return
    }
    position -= carouselWidth;
    carouselInner.style.translate = `${position}px`
    carouselInner.style.transition= `all 0.5s ease`

    var dotEl = document.querySelector(
        ".carousel .carousel-dots div.active"
    );
    dotEl.classList.remove("active");
    dotEl.nextElementSibling.classList.add("active");
        
})

prevBtn.addEventListener("click", function(e){
    if(Math.abs(position) === 0){
        return
    }
    position += carouselWidth;
    carouselInner.style.translate = `${position}px`

    var dotEl = document.querySelector(
        ".carousel .carousel-dots div.active"
    );
    dotEl.classList.remove("active");
    dotEl.previousElementSibling.classList.add("active");
})

/////////////////////////////////////////////////////////////////////////////////////////////////////

var carouselDotsEl= document.querySelector('.carousel .carousel-dots');
function createDots() {
    if (carouselInner.children.length > 0) {
        for (var i = 0; i < carouselInner.children.length; i++) {
            carouselDotsEl.innerHTML += `<div></div>`;
        }
    }
}

createDots();

var carouselDots = document.querySelectorAll(".carousel .carousel-dots div");
carouselDots.forEach(function (dot, index) {
    dot.dataset.index = index;
    if (index === 0) {
        dot.classList.add("active");
    }
    dot.addEventListener("click", function (e) {
        var dotEl = document.querySelector(
            ".carousel .carousel-dots div.active"
        );
        dotEl.classList.remove("active");
        e.target.classList.add("active");
        position = -carouselWidth* index;
        carouselInner.style.transition= `all 0.5s ease`
        carouselInner.style.translate = `${position}px`;
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

var moveSpace
var offsetXCarousel
carouselInner.addEventListener("mousedown", function(e){
    e.preventDefault()
    offsetXCarousel= e.offsetX
    if(e.which === 1){
        document.addEventListener("mousemove", handleDrag)
    }
})

document.addEventListener("mouseup", function(e){
    carouselInner.style.cursor= `default`
    console.log(offsetXCarousel);
    
    moveSpace= e.clientX - offsetXCarousel;
    console.log(moveSpace);
    document.removeEventListener("mousemove", handleDrag)
    

    // var dotEl = document.querySelector(
    //     ".carousel .carousel-dots div.active"
    // );
    // var indexDot= dotEl.dataset.index 
    // if(Math.abs(moveSpace) > carouselWidth/10){
    //     carouselInner.style.translate= `-${carouselWidth}px`
    //     carouselInner.style.transition= `all 0.5s ease`

    //     dotEl.classList.remove("active");
    //     dotEl.nextElementSibling.classList.add("active");
    // }
})

function handleDrag(e){
    var dotEl = document.querySelector(
        ".carousel .carousel-dots div.active"
    );
    // dotEl.classList.remove("active");
    // dotEl.nextElementSibling.classList.add("active");

    var indexDot= dotEl.dataset.index 
    console.log(offsetXCarousel,carouselWidth,parseInt(indexDot));
    
    carouselInner.style.translate= `${e.clientX - (offsetXCarousel + carouselWidth)}px`
    carouselInner.style.cursor= `move`;
    
}