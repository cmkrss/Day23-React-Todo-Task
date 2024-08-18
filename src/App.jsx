// import React, { useState } from 'react';
// import './App.css';
// import { v4 as uuidv4 } from 'uuid';

// const STATUS_OPTIONS = ['All', 'Completed', 'Not Completed'];

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState('All');
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskStatus, setTaskStatus] = useState('Not Completed');
  
//   const addTodo = () => {
//     if (taskName && taskDescription) {
//       setTodos([...todos, { id: uuidv4(), name: taskName, description: taskDescription, status: taskStatus }]);
//       setTaskName('');
//       setTaskDescription('');
//       setTaskStatus('Not Completed');
//     }
//   };

//   const editTodo = (id, newName, newDescription) => {
//     setTodos(todos.map(todo =>
//       todo.id === id
//         ? { ...todo, name: newName, description: newDescription }
//         : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const toggleStatus = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id
//         ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' }
//         : todo
//     ));
//   };

//   const filteredTodos = todos.filter(todo => filter === 'All' || todo.status === filter);

//   return (
//     <div className="App">
//       <h3>My Todo</h3>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Todo Name"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Todo Description"
//           value={taskDescription}
//           onChange={(e) => setTaskDescription(e.target.value)}
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>

//       <div class="todo-container">
//     <h3 class="todo-header">My Todos</h3>
//     <div class="status-filter">
//         <h3>Status Filter:</h3>
//         <select>
//             <option value="all">All</option>
//             <option value="complete">Complete</option>
//             <option value="incomplete">Incomplete</option>
//         </select>
//     </div>
// </div>
      
//       {/* <div className="filter-container">
//         <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//           {STATUS_OPTIONS.map(option => (
//             <option key={option} value={option}>{option}</option>
//           ))}
//         </select>
//       </div> */}

//       <div className="todo-list">
//         {filteredTodos.map(todo => (
//           <div key={todo.id} className="todo-card">
//               <p>{"Name: "+todo.name}</p>
//               <p>{"Description: "+todo.description}</p>
//               <div class="status-filter">
//         <p>Status : </p>
//         <select>
//             <option value="incomplete">Not Completed</option>
//             <option value="complete">Completed</option>
//         </select>
//     </div>
             
//               <button onClick={() => toggleStatus(todo.id)}>Edit</button>
//               <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import { v4 as uuidv4 } from 'uuid';

// const STATUS_OPTIONS = ['All', 'Completed', 'Not Completed'];

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState('All');
//   const [taskName, setTaskName] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskStatus, setTaskStatus] = useState('Not Completed');
//   const [editId, setEditId] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editDescription, setEditDescription] = useState('');

//   const addTodo = () => {
//     if (taskName && taskDescription) {
//       setTodos([...todos, { id: uuidv4(), name: taskName, description: taskDescription, status: taskStatus }]);
//       setTaskName('');
//       setTaskDescription('');
//       setTaskStatus('Not Completed');
//     }
//   };

//   const editTodo = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id
//         ? { ...todo, name: editName || todo.name, description: editDescription || todo.description }
//         : todo
//     ));
//     setEditId(null);
//     setEditName('');
//     setEditDescription('');
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const toggleStatus = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id
//         ? { ...todo, status: todo.status === 'Not Completed' ? 'Completed' : 'Not Completed' }
//         : todo
//     ));
//   };

//   const filteredTodos = todos.filter(todo => filter === 'All' || todo.status === filter);

//   return (
//     <div className="App">
//       <h3>My Todo List</h3>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Todo Name"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Todo Description"
//           value={taskDescription}
//           onChange={(e) => setTaskDescription(e.target.value)}
//         />
//         <button onClick={addTodo}>Add Todo</button>
//       </div>

//       <div className="todo-container">
//         <h3 className="todo-header">My Todos</h3>
//         <div className="status-filter">
//           <h3>Status Filter:</h3>
//           <select value={filter} onChange={(e) => setFilter(e.target.value)}>
//             {STATUS_OPTIONS.map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="todo-list">
//         {filteredTodos.map(todo => (
//           <div key={todo.id} className="todo-card">
//             {editId === todo.id ? (
//               <div className="edit-form">
//                 <input
//                   type="text"
//                   placeholder="Edit Name"
//                   value={editName}
//                   onChange={(e) => setEditName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Edit Description"
//                   value={editDescription}
//                   onChange={(e) => setEditDescription(e.target.value)}
//                 />
//                 <button className="btn btn-green" onClick={() => editTodo(todo.id)}>Save</button>
//                 <button className="btn btn-red" onClick={() => setEditId(null)}>Cancel</button>
//               </div>
//             ) : (
//               <>
//                 <p>Name: {todo.name}</p>
//                 <p>Description: {todo.description}</p>
//                 <p>Status: {todo.status}</p>
//                 <div className="todo-actions">
//                   <button className="btn btn-green" onClick={() => setEditId(todo.id)}>Edit</button>
//                   <button className="btn btn-red" onClick={() => deleteTodo(todo.id)}>Delete</button>
//                 </div>

                
//               </>
//             )}
//             <button className="btn btn-toggle" onClick={() => toggleStatus(todo.id)}>
//               {todo.status === 'Not Completed' ? 'Mark as Completed' : 'Mark as Incomplete'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


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
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const addTodo = () => {
    if (taskName && taskDescription) {
      setTodos([...todos, { id: uuidv4(), name: taskName, description: taskDescription, status: taskStatus }]);
      setTaskName('');
      setTaskDescription('');
      setTaskStatus('Not Completed');
    }
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, name: editName || todo.name, description: editDescription || todo.description }
        : todo
    ));
    setEditId(null);
    setEditName('');
    setEditDescription('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleStatus = (id, status) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, status }
        : todo
    ));
  };

  const filteredTodos = todos.filter(todo => filter === 'All' || todo.status === filter);

  return (
    <div className="App">
      <h3>My Todo List</h3>
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
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todo-container">
        <h3 className="todo-header">My Todos</h3>
        <div className="status-filter">
          <h3>Status Filter:</h3>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {STATUS_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div key={todo.id} className="todo-card">
            {editId === todo.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  placeholder="Edit Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Edit Description"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button className="btn btn-green" onClick={() => editTodo(todo.id)}>Save</button>
                <button className="btn btn-red" onClick={() => setEditId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <p>Name: {todo.name}</p>
                <p>Description: {todo.description}</p>
                <div className="status-filter">
                  <p>Status: </p>
                  <select
                    value={todo.status}
                    onChange={(e) => toggleStatus(todo.id, e.target.value)}
                  >
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="todo-actions">
                  <button className="btn btn-green" onClick={() => setEditId(todo.id)}>Edit</button>
                  <button className="btn btn-red" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
