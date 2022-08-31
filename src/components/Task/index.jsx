import React from 'react'
import './index.css'

const Task = ({ id, title, content, time, completedToDo, deleteToDo }) => {
    return (
        <div className='task'>
            <div className='task__id'>{id ? id : null}</div>
            <div className='task__desc'>
                <div className='task__desc__title'>{title ? title : null}</div>
                <div className='task__desc__content'>{content ? content : null}</div>
            </div>
            <div className='task__time'>{time ? time : null}</div>
            <div className='task__btn'><button onClick={() => { completedToDo(id) }} className='task__btn__check' /></div>
            <div className='task__btn'><button onClick={() => { deleteToDo(id) }} className='task__btn__cross' /></div>
        </div>
    )
}

export default Task