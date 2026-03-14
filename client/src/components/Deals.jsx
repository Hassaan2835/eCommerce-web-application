import React from 'react'

const Deals = () => {
  const deals = [
    { name: 'Smart watches', discount: '-25%', image: '/deals/smart-watch.png' },
    { name: 'Laptops', discount: '-15%', image: '/deals/laptop.png' },
    { name: 'GoPro cameras', discount: '-40%', image: '/deals/dslr.png' },
    { name: 'Headphones', discount: '-25%', image: '/deals/headphones.png' },
    { name: 'Canon camaras', discount: '-25%', image: '/deals/smartphone.png' },
  ];

  return (
    <section className="deals" style={{ padding: '1.5rem 0' }}>
      <div className="container deals-container" style={{ 
        display: 'flex', 
        backgroundColor: 'var(--white)', 
        borderRadius: '6px', 
        border: '1px solid #E3E8EE',
        overflow: 'hidden'
      }}>
        {/* Timer Box */}
        <div className="deals-timer-box" style={{ 
          padding: '1.2rem 1.5rem', 
          borderRight: '1px solid #E3E8EE', 
          minWidth: '280px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--dark-color)', marginBottom: '0.2rem' }}>Deals and offers</h3>
          <p style={{ color: 'var(--gray-500)', fontSize: '1rem', marginBottom: '1.2rem' }}>Hygiene equipments</p>
          
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.2rem' }}>
            <div className="timer-box">
              <span className="timer-num">04</span>
              <p className="timer-label">Days</p>
            </div>
            <div className="timer-box">
              <span className="timer-num">13</span>
              <p className="timer-label">Hour</p>
            </div>
            <div className="timer-box">
              <span className="timer-num">34</span>
              <p className="timer-label">Min</p>
            </div>
            <div className="timer-box">
              <span className="timer-num">56</span>
              <p className="timer-label">Sec</p>
            </div>
          </div>
        </div>

        {/* Deals List */}
        <div className="deals-items-list" style={{ display: 'flex', flex: 1 }}>
          {deals.map((deal, index) => (
            <div key={index} style={{ 
              flex: 1, 
              padding: '1.2rem 0.5rem', 
              textAlign: 'center', 
              borderRight: index === deals.length - 1 ? 'none' : '1px solid #E3E8EE',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.8rem' }}>
                <img src={deal.image} alt={deal.name} style={{ maxWidth: '140px', maxHeight: '140px', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '0 0.5rem' }}>
                <p style={{ fontSize: '0.95rem', color: '#1C1C1C', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{deal.name}</p>
                <span style={{ 
                  backgroundColor: '#FFE3E3', 
                  color: '#EB001B', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.85rem', 
                  fontWeight: '600',
                  display: 'inline-block'
                }}>{deal.discount}</span>
              </div>
            </div>
          ))}
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
