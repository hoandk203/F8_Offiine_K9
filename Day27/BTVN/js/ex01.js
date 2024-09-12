var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

function getError(field){
    if(!field.includes(".")){
        console.log(errors[field].required);
    }else{
        var before= field.slice(0, field.indexOf("."));
        var after= field.slice(field.indexOf(".")+1);
        console.log(errors[before][after]);
    }
}


getError('name') //Vui lòng nhập họ tên
getError('name.min') //Họ tên phải từ 5 ký tự

getError('email') //Vui lòng nhập địa chỉ email
getError('password.same') //Email đã có người sử dụng
