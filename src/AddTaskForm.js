
import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

const AddTaskForm = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const { addTask } = useTaskContext();

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      addTask({ id: Date.now(), text: newTaskText, completed: false });
      setNewTaskText('');
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="write here"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>
        Add 
      </button>
    </div>
  );
};

export default AddTaskForm;
