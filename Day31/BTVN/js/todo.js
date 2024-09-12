var inputAdd= document.querySelector('.input-add')
var btnAdd= document.querySelector('.btn-add')
var tasksEl= document.querySelector('.tasks')

btnAdd.addEventListener("click", function(e){
    e.preventDefault();
    if(inputAdd.value !== ""){

        tasksEl.innerHTML += `<div class="task">
                        <p>${inputAdd.value}</p>
                        <div class="action">
                            <i class="btn-update fa-regular fa-pen-to-square"></i>
                            <i class="btn-delete fa-regular fa-trash"></i>
                        </div>
                    </div>`
        inputAdd.value= '';
        action();
    }
})

/////////////////////////////////////////////////////////
function action(){
    var tasks = document.querySelectorAll('.task');
    tasks.forEach(function(task) {
        task.addEventListener("click", function(e) {
            if (e.target.classList.contains('btn-delete')) {
                task.remove();
            }else if(e.target.classList.contains('btn-update')){
                var taskValue= task.querySelector('p').innerText
                task.outerHTML= `<form action="">
                        <input type="text" class="input-update" value="${taskValue}">
                        <button class="btn-enter-update">Edit task</button>
                    </form>`
                

                
            }
        });
    });
    var formsUpdate= document.querySelector('.tasks form')
    formsUpdate.forEach(function(formUpdate){
        var btnEnterUpdate= document.querySelector('.btn-enter-update')
        btnEnterUpdate.addEventListener("click", function(eventEnterUpdate){
            eventEnterUpdate.preventDefault();
            var inputUpdateValue= document.querySelector('.input-update').value
            
            formUpdate.outerHTML= `<div class="task">
                    <p>${inputUpdateValue}</p>
                    <div class="action">
                        <i class="btn-update fa-regular fa-pen-to-square"></i>
                        <i class="btn-delete fa-regular fa-trash"></i>
                    </div>
                </div>`
            action();
        })
    })

}


action();