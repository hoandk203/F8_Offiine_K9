var queryString= "status=active&keyword=ahihi&category=1&category=2&category=3" ;

/*
 {
    status:"active",
    keyword:"ahihi",
    category: ["1", "2", "3"]
 }
 */

 var result= queryString.split("&").reduce(function(pre, current){
    var arr= current.split("=");
    var key= arr[0];
    var value= arr[1];
    if(!pre[key]){
        pre[key]= value;
    }else{
        if(!Array.isArray(pre[key])){
            pre[key]= [pre[key]];
        }
        pre[key].push(value);
    }

    return pre;
 }, {})

// console.log(result);

/////////////////////////////////////////////////////////////////////////////

//optional chaining ( ?. )

// 1. optional chaining voi thuoc tinh

var user= {
    name: {
        firstName: 'An'
    }
}

// console.log(user?.name?.firstName);

//2. optional chaining voi phuong thuc
var user= null;
user?.getFirstName?.();