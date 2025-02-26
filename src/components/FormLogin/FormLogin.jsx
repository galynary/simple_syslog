//import { useState } from 'react';
import { useState } from 'react';
//import '../FormLogin/FormLogin.css';
import { useNavigate } from 'react-router-dom';

const FormLogin = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { ...formData };
    console.log('User data:', newUser);
    onLogin();
    navigate('dashboard');
  };

  return (
    <div>
      <h2>Welcome to Simple Syslog Server</h2>
      <form onSubmit={handleSubmit} className="form-rgs">
        <div className="form-input">
          <label htmlFor="email">Ел. пошта: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Пароль: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <button type="submit">Enter!</button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
