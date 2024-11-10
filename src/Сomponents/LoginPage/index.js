// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fake credentials
  const validUsername = 'user';
  const validPassword = 'password';
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      navigate('/profile'); // Redirect to ProfilePage on successful login
    } else {
      setError('Неправильный логин или пароль');
    }
  };

  return (
    <div className="login-container">
      <svg width="223" height="51" viewBox="0 0 223 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77487 16.6822L0 12.1542V39.3224L7.77487 43.3738V34.3177L22.8534 42.4206V33.3645L7.77487 25.2617V16.6822Z" fill="#113F71"/>
        <path d="M15.0785 20.257L8.48168 16.2056L22.8534 8.1028L15.7853 4.0514L22.8534 0L33.9267 6.0771L45 12.1542L37.9319 16.2056L30.1571 12.1542L15.0785 20.257Z" fill="#113F71"/>
        <path d="M37.4607 16.6822L30.1571 20.257V38.8458L23.3246 42.4206V51L45 39.3224V34.9135V30.5047L41.466 32.4112L37.9319 34.3177L37.4607 16.6822Z" fill="#113F71"/>
        <path d="M77.4734 43H72.0291V12.9583H62V8H87.5025V12.9583H77.4734V43Z" fill="#113F71"/>
        <path d="M104.695 8L90.3679 43H96.9585L106.701 18.5L116.157 43H121.888L108.134 8H104.695Z" fill="#113F71"/>
        <path d="M152.548 43H130.484V8H135.929V38.3333H152.548V43Z" fill="#113F71"/>
        <path d="M173.466 8L159.425 43H165.443L175.185 18.5L185.214 43H190.945L177.191 8H173.466Z" fill="#113F71"/>
        <path d="M196.963 8V43H202.407V34.25H211.576C213.869 34.25 215.535 33.571 217.021 32.5011C228.89 23.9525 220.97 8 211.576 8H196.963Z" fill="#113F71"/>
        <path d="M202 29V14H210.91C220.808 16.2233 217.035 29 210.91 29H202Z" fill="white"/>
      </svg>

      <div className="login-form">
        <h2>Добро пожаловать!</h2>
        <p>Войдите в свою учетную запись</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Логин</label>
            <input
              type="text"
              id="username"
              placeholder="Введите ваш код"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                👁️
              </span>
            </div>
          </div>
          <button type="submit" className="login-button">Вход</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
