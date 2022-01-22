import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    const deleteTodo = (todoId) => {
        props.deleteTodo(todoId);
    }
    return (
        <div>
            {props.todos && props.todos.map((todo) => {
                return <Todo key={todo.id} title={todo.text} deleteTodo={() => deleteTodo(todo.id)} />
            })}
        </div>
    )
}

export default Todos
