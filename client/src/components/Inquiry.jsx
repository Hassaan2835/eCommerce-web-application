import React from 'react'

const Inquiry = () => {
  return (
    <section className="inquiry" style={{ padding: '1rem 0' }}>
      <div className="container inquiry-container" style={{ 
        backgroundImage: 'linear-gradient(to right, #2C7CF1, rgba(0, 209, 255, 0.5)), url("https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.5rem',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        color: 'white'
      }}>
        <div className="inquiry-text" style={{ maxWidth: '440px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>An easy way to send requests to all suppliers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
        
        <div className="inquiry-form-card" style={{ 
          backgroundColor: 'var(--white)', 
          padding: '1.5rem', 
          borderRadius: 'var(--radius-md)', 
          width: '500px',
          color: 'var(--dark-color)'
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Send quote to suppliers</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" placeholder="What item you need?" style={{ padding: '0.8rem', border: '1px solid var(--gray-400)', borderRadius: '6px' }} />
            <textarea placeholder="Type more details" style={{ padding: '0.8rem', border: '1px solid var(--gray-400)', borderRadius: '6px', minHeight: '80px' }}></textarea>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="number" placeholder="Quantity" style={{ padding: '0.8rem', border: '1px solid var(--gray-400)', borderRadius: '6px', flex: 1 }} />
              <select style={{ padding: '0.8rem', border: '1px solid var(--gray-400)', borderRadius: '6px', width: '120px' }}>
                <option>Pcs</option>
              </select>
            </div>
            <button className="btn-primary" style={{ width: 'fit-content' }}>Send inquiry</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inquiry
