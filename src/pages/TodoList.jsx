import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaTrash, FaCheckCircle } from 'react-icons/fa'; // Importing icons

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCompleteTodo = (index) => {
    setCompletedTodos([...completedTodos, todos[index]]);
    handleRemoveTodo(index);
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">📝 Modern Todo List</h2>

        {/* Input Section */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control rounded"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className="btn btn-success px-4" onClick={handleAddTodo}>
            <FaPlus /> Add
          </button>
        </div>

        {/* Todo List Section */}
        <div className="mt-4">
          <h4 className="mb-3">📌 Pending Tasks</h4>
          {todos.length === 0 ? (
            <p className="text-muted">No pending tasks. 🎉</p>
          ) : (
            <ul className="list-group">
              {todos.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {task}
                  <div>
                    <button className="btn btn-outline-success me-2" onClick={() => handleCompleteTodo(index)}>
                      <FaCheckCircle />
                    </button>
                    <button className="btn btn-outline-danger" onClick={() => handleRemoveTodo(index)}>
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Completed Tasks Section */}
        <div className="mt-5">
          <h4 className="mb-3">✅ Completed Tasks</h4>
          {completedTodos.length === 0 ? (
            <p className="text-muted">No completed tasks yet. 👏</p>
          ) : (
            <ul className="list-group bg-light">
              {completedTodos.map((task, index) => (
                <li key={index} className="list-group-item text-decoration-line-through text-success">
                  {task}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
