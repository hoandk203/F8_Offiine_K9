import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from '../redux/slice/counterSlice';
import { getPosts } from '../redux/middlewares/postsMiddleware';

const Counter = () => {
    const dispatch= useDispatch();
    const count= useSelector((state)=>state.counter.count)

    const onIncrement= ()=>{
        dispatch(counterSlice.actions.increment(5))
    }

    const onDecrement= ()=>{
        dispatch(counterSlice.actions.decrement(10))
    }

    useEffect(()=>{
        dispatch(getPosts())
    }, [])
    const postList= useSelector((state)=>state.counter.postList)
    const status= useSelector((state)=> state.counter.status)
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <ul>
            {status === "pending" && <h3>Loading...</h3>}
            {status === "success" && postList.map((item, index)=>{
                return <li key={index}>{item.title}</li>
            })}
            {status === "error" && <h3>Something went wrong</h3>}
        </ul>
    </div>
  )
}

export default Counter