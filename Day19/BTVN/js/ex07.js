var n= 10;
document.write(`<div class="container">`)
for(var i= 1; i<= n; i++){
    document.write(`<div>`)
    for(var j= 1; j<= n; j++){
        document.write(`<p>${i} x ${j}= ${i*j}</p>`)
    }
    document.write(`</div>`)
}
document.write(`</div>`)