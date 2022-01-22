import React, { useState } from 'react';

const TodoInput = (props) => {
    const [todoText, setTodoText] = useState("");

    const inputHandler = (e) => {
        setTodoText(e.target.value);
    }

    const addTodo = () => {
        props.addTodo(todoText);
        setTodoText("");
    }
    return (
        <>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="todo-text" autoComplete='false' value={todoText} onChange={inputHandler} />
            </div>
            <button type="submit" className="btn btn-primary me-3" onClick={addTodo}>Submit</button>
            <button className="btn btn-danger" onClick={props.clear}>Clear All</button>
        </>
    )
}

export default TodoInput;
