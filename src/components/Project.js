import React from 'react';
import dcode from '../assets/img/dcode.png'

function Project() {

    return (
        <>
        <h1>projects()</h1>
        <a 
        href="https://github.com/bendemic90/group-project-2"
        rel="noopener noreferrer"
        target="_blank"
        >
            <img className="dcode" src={dcode} width="200px" alt="dcode" />
            </a>
        </>
    )
}

export default Project;