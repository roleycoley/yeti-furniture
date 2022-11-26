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
        className={state ? 'active' : null} 
        onMouseLeave={deactivate} 
        onMouseEnter={toggleActive}>
            <div className="image-cover" style={state ? {opacity: 1} : {opacity : 0}}>{text}</div>
            <img src={image} alt="couch" className={state ? 'active' : null}/>
        </div>
    )
}