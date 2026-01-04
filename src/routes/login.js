import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login({ setIsLoggedIn, setUserRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [role, setRole] = useState('user');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Load saved credentials
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedRole = localStorage.getItem('role');

    if (savedEmail && savedPassword && savedRole) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRole(savedRole);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    if (role === 'admin' && adminPassword !== 'Admin1199') {
      alert('Incorrect Admin Password!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const data = response.data;

      if (data.message === 'Login successful') {
        if (rememberMe) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('role', role);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.removeItem('role');
        }

        setIsLoggedIn(true);
        setUserRole(role);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
      } else {
        alert(data.error || 'Login failed.');
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url('/images/bkg1.jpg')`, // ✅ public folder path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container left-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Login to Your Account</h3>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="role">Login as:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {role === 'admin' && (
            <>
              <label htmlFor="adminPassword">Admin Password</label>
              <input
                id="adminPassword"
                type="password"
                placeholder="Enter Admin Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
            </>
          )}

          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me?</label>
          </div>

          <button type="submit" className="btn-login">LOGIN</button>
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </form>
      </div>

      <div className="container right-container">
        <div className="quote-text">
          THE GOAL OF LIFE IS <br />
          LIVING IN AGREEMENT <br />
          WITH NATURE.
        </div>
      </div>
    </div>
  );
}

export default Login;
