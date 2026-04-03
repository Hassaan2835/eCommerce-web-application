import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Deals = ({ products }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  // Use products from props or fallback to empty array
  const displayProducts = products && products.length > 0 ? products : [];

  const formatNum = (num) => num.toString().padStart(2, '0');

  return (
    <section id="deals" className="deals" style={{ padding: '1.5rem 0' }}>
      <div className="container deals-container" style={{ 
        display: 'flex', 
        backgroundColor: 'var(--white)', 
        borderRadius: '6px', 
        border: '1px solid #E3E8EE'
      }}>
        {/* Timer Box */}
        <div className="deals-timer-box" style={{ 
          padding: '1.2rem 1.5rem', 
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--dark-color)', marginBottom: '0.2rem' }}>Deals and offers</h3>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>Hygiene equipments</p>
          
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.2rem' }}>
            <div className="timer-box">
              <span className="timer-num">{formatNum(timeLeft.days)}</span>
              <p className="timer-label">Days</p>
            </div>
            <div className="timer-box">
              <span className="timer-num">{formatNum(timeLeft.hours)}</span>
              <p className="timer-label">Hour</p>
            </div>
            <div className="timer-box">
              <span className="timer-num">{formatNum(timeLeft.minutes)}</span>
              <p className="timer-label">Min</p>
            </div>
            <div className="timer-box">
              <span className="timer-num">{formatNum(timeLeft.seconds)}</span>
              <p className="timer-label">Sec</p>
            </div>
          </div>
        </div>

        {/* Deals List */}
        <div className="deals-items-list" style={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
          {displayProducts.map((product, index) => (
            <div 
              key={product._id} 
              onClick={() => navigate(`/details/${product._id}`)}
              className="deal-item"
              style={{ 
                flex: '1 0 160px', 
                padding: '1.5rem 0.5rem', 
                textAlign: 'center', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                borderLeft: '1px solid #E3E8EE'
              }}
            >
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.8rem' }}>
                <img src={product.image} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '0 0.5rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#1C1C1C', marginBottom: '0.4rem', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</p>
                <span style={{ 
                  backgroundColor: '#FFE3E3', 
                  color: '#EB001B', 
                  padding: '0.2rem 0.6rem', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem', 
                  fontWeight: '600',
                  display: 'inline-block'
                }}>-25%</span>
              </div>
            </div>
          ))}
          {displayProducts.length === 0 && <div style={{ padding: '2rem', textAlign: 'center', flex: 1 }}>Loading deals...</div>}
        </div>
      </div>
      
      <style>{`
        .timer-box {
          background-color: #606060;
          color: white;
          width: 50px;
          height: 54px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          padding: 2px;
        }
        .timer-num {
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 1.2;
        }
        .timer-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 2px;
        }
      `}</style>
    </section>
  )
}

export default Deals
