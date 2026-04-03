import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed ${email}! (Mock success)`);
    setEmail('');
  };

  return (
    <section className="newsletter" style={{ padding: '3.5rem 0', backgroundColor: '#EFF2F4', textAlign: 'center' }}>
      <div className="container newsletter-container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold', color: '#1C1C1C' }}>
          Subscribe on our newsletter
        </h3>
        <p style={{ color: '#606060', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        
        <form onSubmit={handleSubscribe} className="newsletter-input-group" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.6rem',
          maxWidth: '430px',
          margin: '0 auto'
        }}>
          <div style={{ position: 'relative', flex: 1, width: '100%' }}>
            <MdEmail style={{ 
              position: 'absolute', 
              left: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#8B96A5',
              fontSize: '1.2rem'
            }} />
            <input 
              type="email" 
              required
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                padding: '0.7rem 1rem 0.7rem 2.5rem', 
                border: '1px solid #DEE2E7', 
                borderRadius: '6px',
                width: '100%',
                fontSize: '0.95rem',
                backgroundColor: '#FFFFFF',
                outline: 'none'
              }} 
            />
          </div>
          <button type="submit" className="btn-primary" style={{ 
            padding: '0.7rem 1.5rem',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '600',
            backgroundColor: '#0D6EFD',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
