import React, { memo } from 'react'

const Child = ({func}) => {
    console.log("render child");
    
  return (
    <div>
        <span>Child: {func()}</span>

    </div>
  )
}

export default memo(Child)
