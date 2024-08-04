// switch case
var action= 'create';

if(action === "create" || action === "insert" || action === "add"){
    console.log("add");
}else if(action === "update" || action === "edit"){
    console.log("edit");
}else if(action === "delete" || action === "remove" || action === "destroy"){
    console.log("delete");
}else{
    console.log("list");
}
// switch (action){
//     case "create":
//     case "insert":
//     case "add";
//         console.log("add");
//         break;
//     case "update":
//         console.log("edit");
//         break;
//         case "delete":
//         console.log("delete");
//         break;
//         default:
//         console.log("list");
//         break;
// }