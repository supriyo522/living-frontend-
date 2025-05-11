import { useState } from 'react';
import './TaskForm.css';
import API from '../api';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', effort: '', dueDate: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    await API.post('/tasks', task);
    window.location.reload();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>Create Task</h3>
      <input required placeholder="Title" onChange={e => setTask({ ...task, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setTask({ ...task, description: e.target.value })} />
      <input type="number" placeholder="Effort (Days)" onChange={e => setTask({ ...task, effort: e.target.value })} />
      <input type="date" onChange={e => setTask({ ...task, dueDate: e.target.value })} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
