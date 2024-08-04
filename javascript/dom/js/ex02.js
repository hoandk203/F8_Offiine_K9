//Event : hành động từ người dùng tác động lên thẻ HTML
//các thẻ HTML có sẵn các event
// việc của lập trình viên là lắng nghe event để thực thi một công việc cụ thể
// định nghĩa các công việc bằng 1 hàm (event handler)
//xác định element => xác định tên sự kiện => định nghĩa event handler
// trong cacs event handler luon co 1 tham so goi la event object (mo ta thong cua event)
// var btnEl= document.querySelector('.btn');
// btnEl.onclick= function(e){
//     console.log("click me");
//     console.log(e);
// }

// var formEl = document.querySelector('form')
// formEl.onsubmit= function(){
//     console.log(`ok`);
//     var value= formEl.querySelector('input').value;
//     console.log(value);
//     return false;
// }


// document.onkeyup= function(e){
//     console.log(`ban vua bam phim gi do`);
//     console.log(e.key);
//     if(e.key=== "Enter"){
//         document.body.style.background= 'yellow';
//     }
//     if(e.key === 'Escape'){
//         document.body.style.background= null;
//     }
// }

// var h1El= document.querySelector('h1')
// h1El.onclick= function(){
//     console.log("click me");
// }
// h1El.onlick= function(){
//     console.log("click me 2");
// }

///////////////////////////////////////////////////////////////////////

//Event Listener
//removeEventListener
var btn2El= document.querySelector('.btn-2');
// btn2El.addEventListener('click', function(){
//     console.log('click me 2');
// })

// btn2El.addEventListener('click', function(){
//     console.log('ok');
// })

var count= 0;

var handleClick= function(){
    console.log(`Count: ${++count}`);
    if(count === 5){
        btn2El.removeEventListener('click', handleClick)
    }
}
btn2El.addEventListener("click", handleClick)