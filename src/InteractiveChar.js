import React, { useState, useEffect } from 'react'



export default function InteractiveLetter({character, placement})
{
    const [state, setState] = useState(true)

    function toggleActive(){
        setState(currentState => !currentState)
    }

    function deactivate(){
        setState(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(false);
        }, placement * 200);
        return () => clearTimeout(timer);
    }, [])
    

    return (
        <div 
        className={state ? 'active' : null} onMouseLeave={deactivate} onMouseEnter={toggleActive}>{character}</div>
    )
}