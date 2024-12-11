import TodoForm from "@/app/(client)/todos/components/TodoForm";

const getTodo= async ()=>{
    const response= await fetch("http://localhost:3005/todos");
    return response.json()
}

const TodoPage= async ()=>{

    const todoList= await getTodo()

    return (
        <div>
            <ul>
                {todoList.map(({id, title}) =>{
                    return <li key={id}>{title}</li>
                })}
            </ul>
            <TodoForm/>
        </div>
    )
}

export default TodoPage