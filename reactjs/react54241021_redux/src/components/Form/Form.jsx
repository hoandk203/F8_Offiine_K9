import React, {useState} from 'react'
import {getInputJob, onUpdateInputJob, onSaveJob} from '../../store'
import { useSelector, useDispatch } from 'react-redux'

export default function () {
    const dispatch= useDispatch()
    const inputJob= useSelector(getInputJob)
    const [inputJob1, setInputJob1]= useState({
        name: "",
        priority: "low",
    })
    const onChange=(e)=>{
        const {name, value}= e.target
        setInputJob1({...inputJob1, [name]: value})
        dispatch(onUpdateInputJob(name, value))
    }

    const onSave= ()=>{
        dispatch(onSaveJob(inputJob1))
    }
  return (
    <div>
        <h3>Add form</h3>
        <input type="text" name='name' onChange={onChange} value={inputJob1.name}/>
        <select name="priority" onChange={onChange} value={inputJob1.priority}>
            <option value={"high"}>High</option>
            <option value={"medium"}>Medium</option>
            <option value={"low"}>Low</option>
        </select>
        <button onClick={onSave}>Save</button>
    </div>
  )
}
