var btnCloseModal= document.querySelector('.btn-close-modal')
var overlay= document.querySelector('.overlay')
var modalForm= document.querySelector('.modal-form')
var btnOpenForm= document.querySelector('.btn-open-form')
var messageEmailLogin= document.querySelector('.message-email-login')
var messagePasswordLogin= document.querySelector('.message-password-login')

btnOpenForm.addEventListener("click", function(){
    modalForm.classList.toggle("none")
    overlay.classList.toggle("none")
})

btnCloseModal.addEventListener("click",function(){
    modalForm.classList.toggle("none")
    overlay.classList.toggle("none")
})

overlay.addEventListener("click", function(){
    modalForm.classList.toggle("none")
    overlay.classList.toggle("none")
})

/////////////////////////////////////////////////////////////////////////////////////
var inputEmailLogin= document.login_form.email_login;

inputEmailLogin.addEventListener("blur", function(){
    if(!inputEmailLogin.value){
        messageEmailLogin.innerText= "Vui lòng nhập thông tin"
        inputEmailLogin.style.borderColor= "red"
        inputEmailLogin.style.color= "red"
    }
})

inputEmailLogin.addEventListener("input", function(){
    var inputValue= inputEmailLogin.value;
    if(!inputValue.includes("@gmail.com")){
        messageEmailLogin.innerText= "Vui lòng nhập đúng định dạng email"
        inputEmailLogin.style.borderColor= "red"
        inputEmailLogin.style.color= "red"
    }else{
        messageEmailLogin.innerText= '';
        inputEmailLogin.style.borderColor= ""
        inputEmailLogin.style.color= ""
    }
})

/////////////////////////////////////////////////////////////////////////////////////
var inputPasswordLogin= document.login_form.password_login;

inputPasswordLogin.addEventListener("blur", function(){
    if(!inputPasswordLogin.value){
        messagePasswordLogin.innerText= "Vui lòng nhập thông tin"
        inputPasswordLogin.style.borderColor= "red"
        inputPasswordLogin.style.color= "red"
    }else{
        messagePasswordLogin.innerText= '';
        inputPasswordLogin.style.borderColor= ""
        inputPasswordLogin.style.color= ""
    }
})

inputPasswordLogin.addEventListener("input", function(){
    if(inputPasswordLogin.value){
        messagePasswordLogin.innerText= '';
        inputPasswordLogin.style.borderColor= ""
        inputPasswordLogin.style.color= ""
    }
})

/////////////////////////////////////////////////////////////////////////////////////
var eyeNormal= document.querySelector(".fa-eye")
var eyeSlash= document.querySelector(".fa-eye-slash")

eyeNormal.addEventListener("click", function(){
    eyeNormal.classList.toggle('none')
    eyeSlash.classList.toggle('none')
    inputPasswordLogin.type= "text"
})

eyeSlash.addEventListener("click", function(){
    eyeNormal.classList.toggle('none')
    eyeSlash.classList.toggle('none')
    inputPasswordLogin.type= "password"
})

/////////////////////////////////////////////////////////////////////////////////////
var btnLogin= document.querySelector(".btn-login")
var errorMessage= document.querySelector(".error-message")

btnLogin.addEventListener("click", function(e){
    if(!inputPasswordLogin.value){
        messagePasswordLogin.innerText= "Vui lòng nhập thông tin"
        inputPasswordLogin.style.borderColor= "red"
        inputPasswordLogin.style.color= "red"
        e.preventDefault();
    }

    if(!inputEmailLogin.value){
        messageEmailLogin.innerText= "Vui lòng nhập thông tin"
        inputEmailLogin.style.borderColor= "red"
        inputEmailLogin.style.color= "red"
        e.preventDefault();
    }

    if(inputEmailLogin.value && inputPasswordLogin.value && inputEmailLogin.value !== "hoanyttv@gmail.com" || inputPasswordLogin.value !== "123456"){
        errorMessage.innerText= "Tài khoản không tồn tại"
        e.preventDefault();
    }
    
})

/////////////////////////////////////////////////////////////////////////////////////
var toggleLogin= document.querySelector(".toggle-login")
var toggleRegister= document.querySelector(".toggle-register")
var registerForm= document.querySelector('.register-form')
var loginForm= document.querySelector('.login-form')

toggleLogin.addEventListener("click", function(){
    if(loginForm.classList.contains("none")){
        loginForm.classList.toggle("none")
        registerForm.classList.toggle("none")
        toggleLogin.classList.toggle("active")
        toggleRegister.classList.toggle("active")
        document.login_form.reset();
        document.register_form.reset();

        messageNameRegister.innerText= '';
        inputNameRegister.style.borderColor= ""
        inputNameRegister.style.color= ""

        messageEmailRegister.innerText= '';
        inputEmailRegister.style.borderColor= ""
        inputEmailRegister.style.color= ""

        messagePasswordRegister.innerText= '';
        inputPasswordRegister.style.borderColor= ""
        inputPasswordRegister.style.color= ""
    }
    
    
})

toggleRegister.addEventListener("click", function(){
    if(registerForm.classList.contains("none")){
        loginForm.classList.toggle("none")
        registerForm.classList.toggle("none")
        toggleRegister.classList.toggle("active")
        toggleLogin.classList.toggle("active")
        document.register_form.reset();
        document.login_form.reset();

        messageEmailLogin.innerText= '';
        inputEmailLogin.style.borderColor= ""
        inputEmailLogin.style.color= ""

        messagePasswordLogin.innerText= '';
        inputPasswordLogin.style.borderColor= ""
        inputPasswordLogin.style.color= ""
    }
    
})
/////////////////////////////////////////////////////////////////////////////////////
//          REGISTER
/////////////////////////////////////////////////////////////////////////////////////
var messageEmailRegister= document.querySelector('.message-email-register')
var messagePasswordRegister= document.querySelector('.message-password-register')
var messageNameRegister= document.querySelector('.message-name-register')
var inputEmailRegister= document.register_form.email_register;

inputEmailRegister.addEventListener("blur", function(){
    if(!inputEmailRegister.value){
        messageEmailRegister.innerText= "Vui lòng nhập thông tin"
        inputEmailRegister.style.borderColor= "red"
        inputEmailRegister.style.color= "red"
    }
})

inputEmailRegister.addEventListener("input", function(){
    var inputValue= inputEmailRegister.value;
    if(!inputValue.includes("@gmail.com")){
        messageEmailRegister.innerText= "Vui lòng nhập đúng định dạng email"
        inputEmailRegister.style.borderColor= "red"
        inputEmailRegister.style.color= "red"
    }else{
        messageEmailRegister.innerText= '';
        inputEmailRegister.style.borderColor= ""
        inputEmailRegister.style.color= ""
    }
})

/////////////////////////////////////////////////////////////////////////////////////
var inputPasswordRegister= document.register_form.password_register;

inputPasswordRegister.addEventListener("blur", function(){
    if(!inputPasswordRegister.value){
        messagePasswordRegister.innerText= "Vui lòng nhập thông tin"
        inputPasswordRegister.style.borderColor= "red"
        inputPasswordRegister.style.color= "red"
    }else{
        messagePasswordRegister.innerText= '';
        inputPasswordRegister.style.borderColor= ""
        inputPasswordRegister.style.color= ""
    }
})

inputPasswordRegister.addEventListener("input", function(){
    if(inputPasswordRegister.value){
        messagePasswordRegister.innerText= '';
        inputPasswordRegister.style.borderColor= ""
        inputPasswordRegister.style.color= ""
    }
})

/////////////////////////////////////////////////////////////////////////////////////
var inputNameRegister= document.register_form.name_register;

inputNameRegister.addEventListener("blur", function(){
    if(!inputNameRegister.value){
        messageNameRegister.innerText= "Vui lòng nhập thông tin"
        inputNameRegister.style.borderColor= "red"
        inputNameRegister.style.color= "red"
    }else{
        messageNameRegister.innerText= '';
        inputNameRegister.style.borderColor= ""
        inputNameRegister.style.color= ""
    }
})

inputNameRegister.addEventListener("input", function(){
    if(inputNameRegister.value){
        messageNameRegister.innerText= '';
        inputNameRegister.style.borderColor= ""
        inputNameRegister.style.color= ""
    }
})

/////////////////////////////////////////////////////////////////////////////////////
var eyeRegisterNormal= document.querySelector(".eye-register")
var eyeRegisterSlash= document.querySelector(".eye-slash-register")

eyeRegisterNormal.addEventListener("click", function(){
    eyeRegisterNormal.classList.toggle('none')
    eyeRegisterSlash.classList.toggle('none')
    inputPasswordRegister.type= "text"
})

eyeRegisterSlash.addEventListener("click", function(){
    eyeRegisterNormal.classList.toggle('none')
    eyeRegisterSlash.classList.toggle('none')
    inputPasswordRegister.type= "password"
})