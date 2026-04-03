import React, { useState } from 'react'

const Inquiry = () => {
  const [formData, setFormData] = useState({
    item: '',
    details: '',
    quantity: '',
    unit: 'Pcs'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inquiry sent for ${formData.item}! (Mock success)`);
    setFormData({ item: '', details: '', quantity: '', unit: 'Pcs' });
  };

  return (
    <section id="inquiry" className="inquiry" style={{ padding: '0 0 2rem' }}>
      <div className="container inquiry-container" style={{ 
        backgroundImage: 'linear-gradient(135deg, #127FFF 0%, rgba(18, 127, 255, 0) 100%), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.5rem 3rem',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <div className="inquiry-text" style={{ maxWidth: '440px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 'bold' }}>An easy way to send requests to all suppliers</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.5', opacity: 0.9 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        
        <div className="inquiry-form-card" style={{ 
          backgroundColor: '#fff', 
          padding: '2rem', 
          borderRadius: '6px', 
          color: '#1C1C1C',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Send quote to suppliers</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="What item you need?" 
              value={formData.item}
              onChange={(e) => setFormData({...formData, item: e.target.value})}
              required
              style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', outline: 'none', fontSize: '0.9rem' }} 
            />
            <textarea 
              placeholder="Type more details" 
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
              style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', minHeight: '80px', outline: 'none', resize: 'none', fontSize: '0.9rem' }}
            ></textarea>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input 
                type="number" 
                placeholder="Quantity" 
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                required
                style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', flex: 1, outline: 'none', fontSize: '0.9rem' }} 
              />
              <div style={{ position: 'relative', width: '100px' }}>
                <select 
                  value={formData.unit}
                  onChange={(e) => setFormData({...formData, unit: e.target.value})}
                  style={{ padding: '0.8rem', border: '1px solid #DEE2E7', borderRadius: '6px', width: '100%', outline: 'none', appearance: 'none', backgroundColor: '#fff', fontSize: '0.9rem' }}
                >
                  <option>Pcs</option>
                  <option>Box</option>
                  <option>Kg</option>
                </select>
                <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#8B96A5' }}>▼</div>
              </div>
            </div>
            <button type="submit" className="btn-primary" style={{ backgroundColor: '#127FFF', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', width: 'fit-content', marginTop: '0.5rem', cursor: 'pointer' }}>Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Inquiry
