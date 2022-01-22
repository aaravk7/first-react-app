import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoInput from './components/TodoInput';
import Container from './components/Container';
import Todos from './components/Todos';
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([{ text: "This is my first todo", id: Date.now() }]);
  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, id: Date.now() }]);
  }

  // Use Effect Hook
  // useEffect(() => {
  //   console.log("Hello");
  // }, [todos]);

  const clear = () => {
    setTodos([]);
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <Navbar title="Todo App" search={false} dark={true} />
      <Container>
        <TodoInput addTodo={addTodo} clear={clear} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </Container>
    </>
  )
}

export default App