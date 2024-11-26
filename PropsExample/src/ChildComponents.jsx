import React from 'react'

function ChildComponents({ name, age, status }) {
    return (
        <div>
            <h1>Child Components</h1>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Status:{status}</p>
        </div>
    )
}

export default ChildComponents