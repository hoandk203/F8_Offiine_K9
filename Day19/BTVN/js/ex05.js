var n= 7, count= 1;
for(var i=1; i<= n; i++){
    row= '';
    for(var j= 1; j<= i; j++){
        row= row+ `${count} `;
        count++;
    }
    console.log(row);
}