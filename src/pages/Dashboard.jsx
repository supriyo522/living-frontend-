import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import UploadForm from '../components/UploadForm';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <TaskForm />
      <UploadForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;
