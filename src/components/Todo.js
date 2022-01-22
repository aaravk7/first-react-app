import React from 'react'

const Todo = (props) => {
    const deleteTodo = () => {
        props.deleteTodo();
    }

    return (
        <div className="alert alert-success my-4 d-flex justify-content-between align-items-center" role="alert">
            {props.title}
            <button type="button" className="btn-close" aria-label="Close" onClick={deleteTodo}></button>
        </div>
    )
}

export default Todo
