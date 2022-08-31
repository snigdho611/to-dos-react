import React from 'react'
import './index.css'

const Add = () => {
    return (
        <div className='add'>
            <input className='add__title' placeholder='title' type={"text"} />
            <input className='add__desc' type={"text"} placeholder='description' />
            <button className='add__btn'></button>
        </div>
    )
}

export default Add