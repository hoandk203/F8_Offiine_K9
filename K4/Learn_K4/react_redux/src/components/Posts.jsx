import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/middlewares/postMiddleware'

const Posts = () => {
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    }, [])
    const postsList= useSelector((state)=> state.posts.postList)
  return (
    <div>
        <h1>Danh Sách bài viết</h1>
        <ul>
            {postsList.map((item, index)=>{
                return <li key={index}>{item.title}</li>
            })}
        </ul>
    </div>
  )
}

export default Posts