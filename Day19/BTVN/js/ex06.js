var n= 8;
document.write(`<div class="container">`)
for(var i= 1; i<= n; i++){
    document.write(`<div class="row">`)
    if(i % 2 !== 0){
        for(var j= 1; j<=n; j++){
            if(j % 2 !== 0){
                document.write(`<div class="white"></div>`);
            }else{
                document.write(`<div class="black"></div>`);
            }
        }
    }else{
        for(var j= 1; j<=n; j++){
            if(j % 2 !== 0){
                document.write(`<div class="black"></div>`);
            }else{
                document.write(`<div class="white"></div>`);
            }
        }
    }
    document.write(`</div>`)
}
document.write(`</div>`)