import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter" style={{ padding: '3rem 0', backgroundColor: 'var(--gray-300)', textAlign: 'center' }}>
      <div className="container newsletter-container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Subscribe on our newsletter</h3>
        <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>Get daily news on upcoming offers from many suppliers all over the world</p>
        
        <div className="newsletter-input-group" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
          <input 
            type="email" 
            placeholder="Email" 
            style={{ 
              padding: '0.8rem 1rem', 
              border: '1px solid var(--gray-400)', 
              borderRadius: '6px',
              width: '300px'
            }} 
          />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
