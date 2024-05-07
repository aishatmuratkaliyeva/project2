
import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { TaskProvider } from './TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TaskProvider>
      <div className="container mt-4">
        <h1>Task 3</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

