import React from 'react'

const Inquiry = () => {
  return (
    <section className="inquiry" style={{ padding: '0 0 2rem' }}>
      <div className="container inquiry-container" style={{ 
        backgroundImage: 'linear-gradient(135deg, #127FFF 0%, rgba(18, 127, 255, 0) 100%), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.5rem 3rem',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        minHeight: '420px'
      }}>
        <div className="inquiry-text" style={{ maxWidth: '440px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', fontWeight: 'bold' }}>An easy way to send requests to all suppliers</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        
        <div className="inquiry-form-card" style={{ 
          backgroundColor: '#fff', 
          padding: '2rem', 
          borderRadius: '6px', 
          width: '440px',
          color: '#1C1C1C',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Send quote to suppliers</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="What item you need?" style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', outline: 'none' }} />
            <textarea placeholder="Type more details" style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', minHeight: '100px', outline: 'none', resize: 'none' }}></textarea>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="number" placeholder="Quantity" style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', flex: 1, outline: 'none' }} />
              <div style={{ position: 'relative', width: '120px' }}>
                <select style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', width: '100%', outline: 'none', appearance: 'none', backgroundColor: '#fff' }}>
                  <option>Pcs</option>
                  <option>Box</option>
                  <option>Kg</option>
                </select>
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#8B96A5' }}>▼</div>
              </div>
            </div>
            <button className="btn-primary" style={{ backgroundColor: '#127FFF', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', width: 'fit-content', marginTop: '0.5rem', cursor: 'pointer' }}>Send inquiry</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inquiry
