const addTodos= (payload)=>{
    return {
        type: "todos/add",
        payload: payload,
    }
}
export {addTodos}