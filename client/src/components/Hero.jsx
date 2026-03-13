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
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map((cat, index) => (
              <li key={index} style={{ 
                padding: '0.6rem 1rem', 
                borderRadius: '6px', 
                cursor: 'pointer',
                backgroundColor: index === 0 ? 'var(--gray-300)' : 'transparent',
                fontWeight: index === 0 ? '500' : 'normal'
              }}>
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Banner */}
        <div className="hero-main-banner" style={{ 
          position: 'relative', 
          backgroundColor: '#F3F3F3', 
          borderRadius: '6px',
          overflow: 'hidden',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url("https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=2001&ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '3rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal' }}>Latest trending</h3>
          <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1.5rem' }}>Electronic items</h2>
          <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--dark-color)', width: 'fit-content' }}>Learn more</button>
        </div>

        {/* Right Info Cards */}
        <div className="hero-right-cards" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <div className="hero-user-card" style={{ backgroundColor: '#E3F0FF', padding: '1rem', borderRadius: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
               <div style={{ width: '40px', height: '40px', backgroundColor: '#B3D4FF', borderRadius: '50%' }}></div>
               <span>Hi, user <br/> let's get started</span>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Join now</button>
            <button className="btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>Log in</button>
          </div>
          
          <div style={{ backgroundColor: '#F38332', color: 'var(--white)', padding: '1.2rem', borderRadius: '6px' }}>
            <p>Get US $10 off with a new supplier</p>
          </div>
          
          <div style={{ backgroundColor: '#55BDC3', color: 'var(--white)', padding: '1.2rem', borderRadius: '6px' }}>
            <p>Send quotes with supplier preferences</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
