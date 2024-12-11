import React, { useEffect, useRef } from 'react'
import { Image } from '../index.js';

export default function () {
    const imageRef= useRef(null);

    const onZoomIn= ()=>{
        imageRef.current.zoomIn();
    }

    const onZoomOut= ()=>{
        imageRef.current.zoomOut();
    }

    const onReset= ()=>{
        imageRef.current.reset();
    }
    
  return (
    <div>
        <Image ref={imageRef} />
        <hr />
        <button onClick={onZoomIn}>ZoomIn</button>
        <button onClick={onZoomOut}>ZoomOut</button>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}
