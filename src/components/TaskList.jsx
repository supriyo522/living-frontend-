import { useEffect, useState } from 'react';
import './TaskList.css';

import API from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async id => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleExport = async () => {
    const res = await API.get('/tasks/export', { responseType: 'blob' });
    const url = URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'tasks.xlsx');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="task-list-container">
      <h3>Your Tasks</h3>
      <button onClick={handleExport}>Export to Excel</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.dueDate?.split('T')[0]} - {task.effort} days
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

