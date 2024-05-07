
import React from 'react';
import { useTaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTaskCompletion } = useTaskContext();

  return (
    <li className={`list-group-item ${task.completed ? 'text-decoration-line-through' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className="ms-2">{task.text}</span>
      <button className="btn btn-danger ms-2" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
