import React from 'react'

const Errors = ({ message }) => {
    return (
        <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontWeight: "bold",
            color: "red",
            height: "1.5rem",
        }}>{message}</div>
    )
}

export default Errors