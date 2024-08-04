// var users= ["item1", "item2", "item3", "item4"];




// Array.prototype.map2= function(callback){
//     var newArr= [];
//     for(var i = 0; i < this.length; i++){
//         var value= this[i];
//         var index= i;
//         var result= callback(value, index);
//         newArr.push(result);
//     }
//     return newArr;
// }

// var newArr = users.map2(function(user, index){
//     return `<h3>${index+1} ${user}</h3>`;
// });

// console.log(newArr);
/////////////////////////////////////////////////////////////////////////////
//Constructor
function Person(name, email){
    this.name= name;
    this.email= email;
    this.getName= function(){
        return this.name;
    }
    this.getEmail= function(){
        return this.email;
    }
}

var person1= new Person("Thai Viet Hoan", "hoanyttv@gmail.com")
// console.log(person1);
// console.log(person1 instanceof Person);
// console.log(person1.constructor.name);

/////////////////////////////////////////////////////////////////////////////

//static method, static property

Person.message= "Hello F8";
// console.log(Person.message);

Person.isPerson= function(instance){
    return instance instanceof Person;
}

// console.log(Person.isPerson(person1));

/////////////////////////////////////////////////////////////////////////////

// từ khóa this trong phương thức tĩnh => trả về constructor
//non-static property, non-static method
Person.prototype.data= "hello ae F8";

Person.prototype.getData= function(){
    console.log(this.constructor.message);
    return this.data;
}

Person.something= function(){
    console.log(new this().data);
    console.log(this.message);
    return 'Something';
}

// console.log(person1.getData());

console.log(Person.something());