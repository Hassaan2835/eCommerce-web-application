import React from 'react'

const Deals = () => {
  const deals = [
    { name: 'Smart watches', discount: '-25%', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Laptops', discount: '-15%', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000' },
    { name: 'GoPro cameras', discount: '-40%', image: 'https://images.unsplash.com/photo-1526170315870-ef6d82f58396?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Headphones', discount: '-25%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Canon camaras', discount: '-25%', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <section className="deals" style={{ padding: '1rem 0' }}>
      <div className="container deals-container" style={{ 
        display: 'flex', 
        backgroundColor: 'var(--white)', 
        borderRadius: 'var(--radius-md)', 
        border: '1px solid var(--gray-400)',
        overflow: 'hidden'
      }}>
        {/* Timer Box */}
        <div className="deals-timer-box" style={{ padding: '1.5rem', borderRight: '1px solid var(--gray-400)', minWidth: '250px' }}>
          <h3>Deals and offers</h3>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Hygiene equipments</p>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <div className="timer-box">
              <span style={{ fontWeight: 'bold' }}>04</span>
              <p style={{ fontSize: '0.7rem' }}>Days</p>
            </div>
            <div className="timer-box">
              <span style={{ fontWeight: 'bold' }}>13</span>
              <p style={{ fontSize: '0.7rem' }}>Hour</p>
            </div>
            <div className="timer-box">
              <span style={{ fontWeight: 'bold' }}>34</span>
              <p style={{ fontSize: '0.7rem' }}>Min</p>
            </div>
            <div className="timer-box">
              <span style={{ fontWeight: 'bold' }}>56</span>
              <p style={{ fontSize: '0.7rem' }}>Sec</p>
            </div>
          </div>
        </div>

        {/* Deals List */}
        <div className="deals-items-list" style={{ display: 'flex', flex: 1 }}>
          {deals.map((deal, index) => (
            <div key={index} style={{ 
              flex: 1, 
              padding: '1.5rem', 
              textAlign: 'center', 
              borderRight: index === deals.length - 1 ? 'none' : '1px solid var(--gray-400)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={deal.image} alt={deal.name} style={{ width: '120px', height: '120px', objectFit: 'contain', marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{deal.name}</p>
              <span style={{ 
                backgroundColor: '#FFE3E3', 
                color: '#EB001B', 
                padding: '0.2rem 0.6rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem', 
                fontWeight: 'bold' 
              }}>{deal.discount}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .timer-box {
          background-color: #606060;
          color: white;
          width: 45px;
          height: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }
      `}</style>
    </section>
  )
}

export default Deals
