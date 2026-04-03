import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MdPerson } from 'react-icons/md';

const Hero = () => {
  const categories = [
    'Automobiles',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipments',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools'
  ];
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <section className="hero" style={{ padding: '1rem 0' }}>
      <div className="container hero-container" style={{ 
        display: 'grid', 
        gap: '1.5rem',
        backgroundColor: 'var(--white)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--gray-400)'
      }}>
        {/* Sidebar */}
        <aside className="hero-sidebar hide-mobile">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {categories.map((cat, index) => (
              <li 
                key={index} 
                onClick={() => navigate(`/listing?category=${encodeURIComponent(cat)}`)}
                style={{ 
                  padding: '0.7rem 1rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  fontWeight: 'normal',
                  color: 'var(--gray-600)',
                  fontSize: '0.95rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E5F1FF'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {cat}
              </li>
            ))}
            <li 
              onClick={() => navigate('/listing')}
              style={{ 
                padding: '0.7rem 1rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                color: 'var(--gray-600)',
                fontSize: '0.95rem',
                borderTop: '1px solid var(--gray-200)',
                marginTop: '0.2rem'
              }}
            >
              More category
            </li>
          </ul>
        </aside>

        {/* Main Banner */}
        <div className="hero-main-banner" style={{ 
          position: 'relative', 
          backgroundColor: '#B2D8D8', 
          borderRadius: '6px',
          overflow: 'hidden',
          backgroundImage: 'url("/banner-v5.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '2.5rem 3.5rem'
        }}>
          <div className="hero-banner-content" style={{ maxWidth: '350px', width: '100%' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '400', marginBottom: '0.4rem', color: '#1C1C1C' }}>Latest trending</h3>
            <h2 className="hero-banner-title" style={{ fontSize: '2.4rem', fontWeight: 'bold', margin: '0 0 1.5rem', color: '#1C1C1C', lineHeight: '1.2' }}>Electronic items</h2>
            <button 
              className="btn" 
              onClick={() => navigate('/listing')}
              style={{ 
                backgroundColor: 'var(--white)', 
                color: 'var(--dark-color)', 
                width: 'fit-content',
                padding: '0.7rem 1.5rem',
                border: 'none',
                fontSize: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: 'var(--shadow-sm)'
              }}
            >Learn more</button>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="hero-right-cards hide-tablet" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="hero-user-card" style={{ backgroundColor: '#E3F0FF', padding: '1.2rem 1rem', borderRadius: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
               <div style={{ 
                 width: '44px', 
                 height: '44px', 
                 backgroundColor: '#B3D4FF', 
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 color: 'var(--white)',
                 fontSize: '1.5rem'
               }}>
                 <MdPerson />
               </div>
               <span style={{ fontSize: '0.9rem', lineHeight: '1.2' }}>
                 Hi, {user ? user.name.split(' ')[0] : 'user'} <br/> 
                 {user ? 'welcome back!' : "let's get started"}
               </span>
            </div>
            {user ? (
              <>
                <button 
                  className="btn-primary" 
                  onClick={() => navigate(user.role === 'admin' ? '/admin' : '/')}
                  style={{ width: '100%', marginBottom: '0.6rem', fontSize: '0.9rem', padding: '0.6rem', backgroundColor: '#0D6EFD', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                >
                  {user.role === 'admin' ? 'Admin Panel' : 'My Orders'}
                </button>
                <button 
                  className="btn-outline" 
                  onClick={logout}
                  style={{ width: '100%', fontSize: '0.9rem', padding: '0.6rem', border: '1px solid #0D6EFD', color: '#0D6EFD', borderRadius: '6px', cursor: 'pointer', backgroundColor: 'transparent' }}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button 
                  className="btn-primary" 
                  onClick={() => navigate('/signup')}
                  style={{ width: '100%', marginBottom: '0.6rem', fontSize: '0.9rem', padding: '0.6rem', backgroundColor: '#0D6EFD', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Join now
                </button>
                <button 
                  className="btn-outline" 
                  onClick={() => navigate('/login')}
                  style={{ width: '100%', fontSize: '0.9rem', padding: '0.6rem', border: '1px solid #0D6EFD', color: '#0D6EFD', borderRadius: '6px', cursor: 'pointer', backgroundColor: 'transparent' }}
                >
                  Log in
                </button>
              </>
            )}
          </div>
          
          <div style={{ backgroundColor: '#F38332', color: 'var(--white)', padding: '1rem', borderRadius: '6px', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>Get US $10 off <br/> with a new <br/> supplier</p>
          </div>
          
          <div style={{ backgroundColor: '#55BDC3', color: 'var(--white)', padding: '1rem', borderRadius: '6px', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>Send quotes with <br/> supplier <br/> preferences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
