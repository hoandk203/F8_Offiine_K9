// sessionStorage.setItem("Name", "Hoan");
// sessionStorage.setItem("age", "21");

// const user = {
//     id: 1,
//     name: "Hoan1",
//     age: 21,
// };

// sessionStorage.setItem("object", JSON.stringify(user));

// console.log(sessionStorage.getItem("Name"));
// console.log(sessionStorage.getItem("age"));
// const myUser = sessionStorage.getItem("object");
// const myObject = JSON.parse(myUser);

// console.log(myObject.name);

///////////////////////////////////////

//cookie

// document.cookie = "name= Hoan";
const cookeData = (document.cookie =
    "username=John Doe; expires=Thu, 12 Sep 2024 14:00:00 UTC");

console.log(cookieData.split(";")[0].split("=")[1]);
