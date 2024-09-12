const data = [];

function handleRegister(fullName, password, email){
    if(fullName && password && email){
        data.push({
            fullname: fullName,
            password: password,
            email: email,
            role: "user"
        })
    }else{
        return console.log("Vui lòng nhập đủ thông tin");;
    }
    
    return data;
}

handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

console.log(data);

function handleLogin(email, password){
    for(var user of data){
        if(email === user.email && password === user.password){
            return user;
        }
    }
    return `Thông tin đăng nhập không hợp lệ`;
}


const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
  