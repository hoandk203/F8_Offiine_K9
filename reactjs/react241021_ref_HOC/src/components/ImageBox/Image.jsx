import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Image= forwardRef(function Image(props, ref) {
    const imageRef= useRef(null);
    useImperativeHandle(ref, ()=>{
        return{
            zoomIn: ()=>{
                imageRef.current.style.width= `${imageRef.current.width * 1.1}px`;
            },
            zoomOut: ()=>{
                imageRef.current.style.width= `${imageRef.current.width * 0.9}px`;
            },
            reset: ()=>{
                imageRef.current.style.width= `${imageRef.current.width / 1.1}px`;
            }
        }
    })
  return (
    <div>
        <img src="https://picsum.photos/200" ref={imageRef}/>
        
    </div>
  )
})
export default Image;
