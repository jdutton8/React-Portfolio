import React, { Dispatch, SetStateAction } from 'react'

function Navbar ({ setDisplayState }) {
    return (
        <nav>
            <button onClick={() => setDisplayState('')}>Home</button>
            <button onClick={() => setDisplayState('projects')}>Projects</button>
            <button onClick={() => setDisplayState('contact')}>Contact</button>
            <button onClick={() => setDisplayState('resume')}>Resume</button>
        </nav> 
    )
}

export default Navbar