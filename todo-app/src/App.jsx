import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const STATUS_OPTIONS = ['All', 'Completed', 'Not Completed'];

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('Not Completed');
  
  const addTodo = () => {
    if (taskName && taskDescription) {
      setTodos([...todos, { id: uuidv4(), name: taskName, description: taskDescription, status: taskStatus }]);
      setTaskName('');
      setTaskDescription('');
      setTaskStatus('Not Completed');
    }
  };

  const editTodo = (id, newName, newDescription) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, name: newName, description: newDescription }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' }
        : todo
    ));
  };

  const filteredTodos = todos.filter(todo => filter === 'All' || todo.status === filter);

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          placeholder="Todo Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div className="filter-container">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {STATUS_OPTIONS.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div key={todo.id} className="todo-card">
            <div className="todo-header">
              <h3>{todo.name}</h3>
              <button onClick={() => toggleStatus(todo.id)}>{todo.status}</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
