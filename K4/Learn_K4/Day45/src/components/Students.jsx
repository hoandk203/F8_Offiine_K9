import React, {useEffect, useState} from 'react'
import data from '../../db.json'

export default function Students() {
    const [searchInput, setSearchInput]= useState("")

    const onSearchInput= (e)=>{
        setSearchInput(e.target.value)
    }

  return (
    <div>
        <input type="search" placeholder='Search...' value={searchInput} onChange={onSearchInput}/>
        <hr />
        {data.map(({id, fullName})=>{
            const position= fullName.toLocaleLowerCase().indexOf(searchInput.toLocaleLowerCase())
            if(searchInput && position !== -1){
                return(
                    <h3 key={id} style={{}}>
                        {fullName.slice(0, position)}
                        <span style={{background: "red"}}>{fullName.slice(position, position+ searchInput.length)}</span>
                        {fullName.slice(position+ searchInput.length)}
                    </h3>
                )
            }
            return <h3 key={id} style={{}}>{fullName}</h3>
        })}
    </div>
  )
}
