import React, { useState } from 'react';
import TodoItem from './components/Todoitem';
import TodoForm from './components/Todoform';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const markTodoDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const updateTodo = (index, updatedMessage) => {
    const updatedTodos = [...todos];
    updatedTodos[index].message = updatedMessage;
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            markTodoDone={markTodoDone}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
