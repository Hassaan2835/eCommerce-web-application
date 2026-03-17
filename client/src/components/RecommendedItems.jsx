import React from 'react'

const RecommendedItems = () => {
  const items = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400' },
    { name: 'Leather wallet', price: '$99.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400' },
    { name: 'Canon camera black, 100x zoom', price: '$9.99', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Headset for gaming with mic', price: '$8.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400' },
    { name: 'Blue wallet for men leather material', price: '$10.30', image: 'https://img.icons8.com/color/480/pottery.png' },
    { name: 'Jeans bag for travel for men', price: '$80.95', image: 'https://img.icons8.com/color/480/kettle.png' },
  ];

  return (
    <section className="recommended" style={{ padding: '0 0 2rem' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Recommended items</h3>
        <div className="recommended-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 2fr)', gap: '1rem' }}>
          {items.map((item, index) => (
            <div key={index} style={{ 
              backgroundColor: '#fff', 
              padding: '1.2rem', 
              borderRadius: '6px', 
              border: '1px solid #DEE2E7',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.price}</p>
                <p style={{ fontSize: '0.95rem', color: '#8B96A5', lineHeight: '1.4' }}>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendedItems
