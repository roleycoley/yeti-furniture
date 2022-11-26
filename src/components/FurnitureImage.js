import React, { useState } from 'react'



export default function FurnitureImage({image, text})
{

    const [state, setState] = useState(false)

    function toggleActive(){
        setState(currentState => !currentState)
    }

    function deactivate(){
        setState(false)
    }

    return (
        <div class="grid-item"             
        className={state ? 'grid-item active' : 'grid-item'} 
        onMouseLeave={deactivate} 
        onMouseEnter={toggleActive}>
            <div className={state ? 'active image-cover' : 'image-cover'} >{text}</div>
            <img src={image} alt="couch" className={state ? 'active' : null}/>
        </div>
    )
}