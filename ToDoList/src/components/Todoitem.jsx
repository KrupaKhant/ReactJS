import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const TodoItem = ({ todo, index, markTodoDone, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState(todo.message);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTodo(index, updatedMessage);
    setIsEditing(false);
  };

  return (
    <div
      className={`todo ${todo.done ? 'done' : ''}`}
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="mt-2">
          {!isEditing && (
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => markTodoDone(index)}
            />
          )}
        </div>
        {isEditing ? (
          <input
            type="text"
            value={updatedMessage}
            className = "me-2"
            onChange={(e) => setUpdatedMessage(e.target.value)}
          />
        ) : (
          <span>{todo.message}</span>
        )}
      <div>
          {!isEditing && (
            <>
              <button className="btn btn-primary me-2 mt-2" onClick={handleEdit}>
                <i className="bi bi-pencil-fill"></i>
              </button>
            </>
          )}
          {isEditing && (
            <button className="btn btn-primary me-2 mt-2" onClick={handleUpdate}>
              <i className="bi bi-pencil-fill"></i>
            </button>
          )}
          <button className="btn btn-danger mt-2" onClick={() => deleteTodo(index)}>
            <i className="bi bi-trash-fill"></i>
          </button>
      </div>
    </div>
      
    </div>
  );
};

export default TodoItem;
