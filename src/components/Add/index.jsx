import React from 'react'
import './index.css'

const Add = ({ newItem, setNewItem, addToDo }) => {
    return (
        <div className='add'>
            <input value={newItem.title}
                onChange={e => {
                    setNewItem(prevItem => {
                        return { ...prevItem, title: e.target.value }
                    })
                }}
                className='add__title' placeholder='title' type={"text"} />
            <textarea onChange={e => {
                setNewItem(prevItem => {
                    return { ...prevItem, content: e.target.value }
                })
            }} className='add__desc' type={"text"} placeholder='description' />
            <input onChange={e => {
                setNewItem(prevItem => {
                    return { ...prevItem, time: e.target.value }
                })
            }} className='add__time' type={"datetime-local"} />
            <button onClick={() => { addToDo() }} className='add__btn'></button>
        </div>
    )
}

export default Add