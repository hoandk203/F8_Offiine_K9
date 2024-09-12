var h1= document.createElement('h1')
h1.innerText= 'Hoc JS'
var ul= document.createElement('ul')
ul.className= 'menu'

for(var i=1; i <=4; i++){
    var li= document.createElement('li')
    li.innerText = `item ${i}`
    li.addEventListener('click', function(){
        removeItem(this)
    })
    ul.append(li)
}

var addBtn= document.createElement('button')
addBtn.innerText= 'Add'
addBtn.addEventListener("click", function(){
    var li= document.createElement('li')
    li.innerText= `item ${i++}`
    li.addEventListener('click', function(){
        removeItem(this)
    })
    ul.append(li)
})

function removeItem(el){
    el.remove()
    
}

root.append(h1)
root.append(ul)
root.append(addBtn)

//insertBefore
var h3= document.createElement('h3')
h3.innerText= 'Javascript'

// root.insertBefore(h3, ul)

var nextUlEl= ul.nextElementSibling
if(nextUlEl){
    root.insertBefore(h3, nextUlEl)
}else{
    root.append(h3)
}

//replaceChild
var p= document.createElement('p')
p.innerText= 'Hoc lap trinh'
root.replaceChild(p, h1)


//removeChild
root.removeChild(ul)

root.append(ul)
