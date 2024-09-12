const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
    { name: "Thái Việt Hoàn", age: 5, address: "Thái Nguyên" },
  ];

function createCustomers(customers){
    
    customers.forEach(function(object){
        var firstName= (object.name).slice(0, (object.name).indexOf(" "));
        var lastName= (object.name).split(" ").slice(-1).join(" ");
        object.shortName= `${firstName} ${lastName}`;
        
    })
    customers.sort(function(a, b){
        if(a.age < b.age){
            return -1;
        }
    })
    return customers;
}

const result = createCustomers(customers); // Tạo hàm createCustomers này. return về mảng mới.
console.log(result);
  