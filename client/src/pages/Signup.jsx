import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }

    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    setLoading(true);
    const result = await register(formData.name, formData.email, formData.password);
    
    if (result.success) {
      if (result.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F8FA', padding: '2rem' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', border: '1px solid #DEE2E7', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center', color: '#1C1C1C' }}>Register</h2>
        
        {error && <div style={{ backgroundColor: '#FFF4E5', color: '#FA3434', padding: '0.8rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#505050' }}>Full Name</label>
            <input 
              type="text" 
              name="name"
              required 
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              placeholder="John Doe"
            />
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#505050' }}>Email Address</label>
            <input 
              type="email" 
              name="email"
              required 
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              placeholder="name@mail.com"
            />
          </div>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#505050' }}>Password</label>
            <input 
              type="password" 
              name="password"
              required 
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              placeholder="At least 6 characters"
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#505050' }}>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              required 
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              placeholder="Repeat password"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            style={{ 
              width: '100%', 
              padding: '0.9rem', 
              backgroundColor: '#0D6EFD', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              fontWeight: 'bold', 
              fontSize: '1rem',
              cursor: 'pointer',
              marginBottom: '1.5rem'
            }}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#505050', fontSize: '0.95rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#0D6EFD', textDecoration: 'none', fontWeight: '500' }}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
