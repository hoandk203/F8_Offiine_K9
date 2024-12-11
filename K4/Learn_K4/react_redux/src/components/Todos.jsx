import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodos} from '../redux/actions/todosActions.js'

export default function Todos() {
    const dispatch= useDispatch();
    const todoList= useSelector((state)=> state.todos.todoList)
    const [task, setTask]= useState({
        name: "",
    })

    const onSubmit= (e)=>{
        e.preventDefault();
        if(!task.name){
            return
            
        }
        dispatch(addTodos(task))
        setTask({name:""})
    }

    const onChange= (e)=>{
        setTask({...task, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <h1>Todo App</h1>
        <ul>
            {todoList && todoList.map((item, index)=>{
                return <li key={index}>{item.name}</li>
            })}
        </ul>
        <form action="" onSubmit={onSubmit}>
            <input value={task.name} onChange={onChange} type="text" name='name' placeholder='Tên công việc...' />
            <button>Thêm</button>
        </form>
    </div>
  )
}
