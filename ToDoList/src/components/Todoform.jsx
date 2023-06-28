import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      message: value,
      done: false,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center">
  <input
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Enter a new todo..."
    className="form-control me-2 "
  />
  <button type="submit" className="btn btn-primary btn-lg">
    <i className="bi bi-plus"></i>
  </button>
</form>

  );
};

export default TodoForm;
