import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid #DEE2E7', maxWidth: '600px', margin: '0 auto' }}>
        <MdCheckCircle style={{ fontSize: '5rem', color: '#00B517', marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Order Placed Successfully!</h2>
        <p style={{ color: '#606060', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Thank you for your purchase. Your order has been received and is being processed. 
          You will receive an email confirmation shortly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/')}
            style={{ padding: '0.8rem 2rem' }}
          >
            Continue Shopping
          </button>
          <button 
            className="btn" 
            onClick={() => navigate('/listing')}
            style={{ padding: '0.8rem 2rem', border: '1px solid #DEE2E7', backgroundColor: 'white' }}
          >
            View More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
