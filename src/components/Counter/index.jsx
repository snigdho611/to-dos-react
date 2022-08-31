import React from 'react'
import './index.css'

const Counter = ({ total }) => {
    return (
        <div className='counter'>Completed: {total ? total : "N/A"}</div>
    )
}

export default Counter