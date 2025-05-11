import { useState } from 'react';
import API from '../api';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await API.post('/auth/register', form);
    navigate('/login');
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input required placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input required placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input required type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

