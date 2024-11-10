import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Preloader from './Сomponents/Preloader'; // Importing Preloader
import reportWebVitals from './reportWebVitals';
import LoginPage from './Сomponents/LoginPage';
import Profile from './Сomponents/Profile';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set timer to simulate loading process
    const timer = setTimeout(() => {
      setLoading(false); // End loading and hide preloader
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

reportWebVitals();
