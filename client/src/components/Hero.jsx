import React from 'react'

const Hero = () => {
  const categories = [
    'Automobiles', 'Clothes and wear', 'Home interiors', 'Computer and tech', 
    'Tools, equipments', 'Sports and outdoor', 'Animal and pets', 'Machinery tools', 'More category'
  ];

  return (
    <section className="hero" style={{ padding: '1.5rem 0' }}>
      <div className="container hero-container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '250px 1fr 200px', 
        gap: '1.5rem',
        backgroundColor: 'var(--white)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--gray-400)'
      }}>
        {/* Sidebar */}
        <aside className="hero-sidebar">
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            {categories.map((cat, index) => (
              <li key={index} style={{ 
                padding: '0.7rem 1rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                backgroundColor: index === 0 ? '#E5F1FF' : 'transparent',
                fontWeight: index === 0 ? '600' : 'normal',
                color: index === 0 ? 'var(--dark-color)' : 'var(--gray-600)',
                fontSize: '0.95rem'
              }}>
                {cat}
              </li>
            ))}
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
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '3rem 3rem'
        }}>
          <div style={{ maxWidth: '30% ', minWidth: '280px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '0.3rem', color: '#1C1C1C' }}>Latest trending</h3>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1.5rem', color: '#1C1C1C', lineHeight: '1.2' }}>Electronic items</h2>
            <button className="btn" style={{ 
              backgroundColor: 'var(--white)', 
              color: 'var(--dark-color)', 
              width: 'fit-content',
              padding: '0.8rem 1.8rem',
              border: 'none',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              boxShadow: 'var(--shadow-sm)'
            }}>Learn more</button>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="hero-right-cards" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
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
                 <i className="fa-solid fa-user"></i>
               </div>
               <span style={{ fontSize: '0.95rem', lineHeight: '1.2' }}>Hi, user <br/> let's get started</span>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginBottom: '0.6rem', fontSize: '0.9rem', padding: '0.6rem' }}>Join now</button>
            <button className="btn-outline" style={{ width: '100%', fontSize: '0.9rem', padding: '0.6rem', border: 'none', color: 'var(--primary-color)' }}>Log in</button>
          </div>
          
          <div style={{ backgroundColor: '#F38332', color: 'var(--white)', padding: '1.2rem', borderRadius: '6px', fontSize: '1rem' }}>
            <p style={{ margin: 0 }}>Get US $10 off <br/> with a new <br/> supplier</p>
          </div>
          
          <div style={{ backgroundColor: '#55BDC3', color: 'var(--white)', padding: '1.2rem', borderRadius: '6px', fontSize: '1rem' }}>
            <p style={{ margin: 0 }}>Send quotes with <br/> supplier <br/> preferences</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
