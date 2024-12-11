'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, {useState} from 'react'




const ProductForm = () => {
    const [form, setForm]= useState({
        status: '',
        query: ''
    })

    const pathname= usePathname()
    const router= useRouter()
    const url= `${pathname}?${new URLSearchParams(form)}`

    const handleSubmit= (e) =>{
        e.preventDefault()
        router.push(url)
    }

    const handleChange= (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select name="status" onChange={handleChange}>
                <option value="all">Tat ca</option>
                <option value="active">Kick hoat</option>
                <option value="inactive">Chua kich hoat</option>
            </select>
            <input type="search" name='query' placeholder='Query...' onChange={handleChange}/>
            <button type='submit'>Tim kiem</button>
        </form>
    </div>
  )
}

export default ProductForm