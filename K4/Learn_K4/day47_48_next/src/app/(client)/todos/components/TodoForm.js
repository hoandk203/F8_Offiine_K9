"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

const TodoForm= ()=>{
    const [title, setTitle]= useState("")
    const router= useRouter()

    const handleSubmit= async (e) => {
        e.preventDefault()
        const response= await fetch("http://localhost:3005/todos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title}),
            cache: "no-cache",
        })
        if(response.ok){
            router.refresh()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Ten cong viec" onChange={(e)=>setTitle(e.target.value)}/>
                <button type="submit">Them</button>
            </form>
        </div>
    )
}

export default TodoForm