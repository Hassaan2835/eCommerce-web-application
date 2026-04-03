import React, { useState, useEffect } from 'react';
import { FaUser, FaComment, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import { MdPerson, MdSettings } from 'react-icons/md';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import API_BASE_URL from '../api/config';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All category');
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleSearch = () => {
    let url = `/listing?name=${encodeURIComponent(searchTerm)}`;
    if (category !== 'All category') {
      url += `&category=${encodeURIComponent(category)}`;
    }
    navigate(url);
  };

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-400)', padding: '1rem 0' }}>
      <div className="container header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', textDecoration: 'none' }}>
          <div style={{ 
            backgroundColor: 'var(--primary-color)', 
            padding: '8px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(13, 110, 253, 0.2)'
          }}>
            <FaShoppingCart style={{ color: 'white', fontSize: '1.4rem' }} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#8CB7F5', letterSpacing: '-0.5px' }}>Brand</span>
        </Link>
        
        <div className="search-bar" style={{ 
          flex: 1, 
          display: 'flex', 
          border: '2px solid var(--primary-color)', 
          borderRadius: '8px',
          overflow: 'hidden',
          maxWidth: '660px',
          marginLeft: '2rem',
          marginRight: '2rem'
        }}>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            style={{ 
              flex: 1, 
              padding: '0.7rem 1.2rem', 
              fontSize: '1rem',
              border: 'none',
              outline: 'none'
            }} 
          />
          <div style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--gray-400)', backgroundColor: 'transparent' }}>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ 
                padding: '0 1rem', 
                border: 'none', 
                outline: 'none',
                background: 'transparent',
                fontSize: '0.95rem',
                cursor: 'pointer',
                color: 'var(--dark-color)',
                height: '100%'
              }}
            >
              <option>All category</option>
              {categories.map((cat, index) => (
                <option key={index}>{cat}</option>
              ))}
            </select>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ 
              borderRadius: '0', 
              padding: '0 1.8rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none'
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        
        <div className="user-actions" style={{ display: 'flex', gap: '1.8rem', color: 'var(--gray-500)', textAlign: 'center' }}>
          <div 
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={() => user ? logout() : navigate('/login')}
          >
            <MdPerson style={{ fontSize: '1.5rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>{user ? 'Logout' : 'Login'}</div>
          </div>
          {isAdmin && (
            <Link to="/admin" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit' }}>
              <MdSettings style={{ fontSize: '1.5rem', marginBottom: '4px' }} />
              <div style={{ fontSize: '0.75rem' }}>Admin</div>
            </Link>
          )}
          <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaComment style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>Message</div>
          </div>
          <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaHeart style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>Orders</div>
          </div>
          <Link to="/cart" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: 'inherit', position: 'relative' }}>
            <FaShoppingCart style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>My cart</div>
            {cartItems.length > 0 && (
              <span style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '5px', 
                backgroundColor: 'red', 
                color: 'white', 
                borderRadius: '50%', 
                padding: '2px 6px', 
                fontSize: '0.7rem',
                fontWeight: 'bold'
              }}>
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      <nav style={{ borderTop: '1px solid var(--gray-400)', height: 'var(--nav-height)' }}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '500', cursor: 'pointer', listStyle: 'none', margin: 0, padding: 0 }}>
            <li 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              onClick={() => navigate('/listing')}
            >
              <FaBars /> All category
            </li>
            <li className="hide-mobile" onClick={() => handleNavClick('deals')}>Hot offers</li>
            <li className="hide-mobile" onClick={() => navigate('/listing')}>Gift boxes</li>
            <li className="hide-mobile" onClick={() => handleNavClick('inquiry')}>Projects</li>
            <li className="hide-mobile" onClick={() => navigate('/')}>Menu item</li>
            <li className="hide-mobile" onClick={() => navigate('/')}>Help</li>
          </ul>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>English, USD</span>
            <span>Ship to 🇩🇪</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
