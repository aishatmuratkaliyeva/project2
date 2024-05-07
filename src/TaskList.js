
import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
