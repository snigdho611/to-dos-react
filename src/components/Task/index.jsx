import React from 'react'
import './index.css'

const Task = ({ id, title, content, time }) => {
    return (
        <div className='task'>
            <div className='task__id'>{id ? id : null}</div>
            <div className='task__desc'>
                <div className='task__desc__title'>{title ? title : null}</div>
                <div className='task__desc__content'>{content ? content : null}</div>
            </div>
            <div className='task__time'>{time ? time : null}</div>
            <div className='task__btn'><button>tick</button></div>
            <div className='task__btn'><button>cross</button></div>
        </div>
    )
}

export default Task