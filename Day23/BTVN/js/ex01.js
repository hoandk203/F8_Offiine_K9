var content= 'mot hai ba bon nam sau bay';
var position= content.indexOf(' ');
var newContent= '';
var before= '';
var temp= content + ' ';
setInterval(function(){
    if(position !== -1){
        newContent= before + `<span>${temp.slice(0, position)}</span>`+ temp.slice(position);
        before= before+ temp.slice(0, position +1);
        temp= temp.slice(position + 1);
        position= temp.indexOf(' ');
        document.body.innerHTML = newContent;
    }else{
        temp= content + ' ';
        position= temp.indexOf(' ');
        newContent= '';
        before= '';
    }
    
}, 300);