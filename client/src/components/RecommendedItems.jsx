import React from 'react'

const RecommendedItems = () => {
  const items = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Leather wallet', price: '$99.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Canon camera black, 100x zoom', price: '$9.99', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Headset for gaming with mic', price: '$8.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Blue wallet for men leather material', price: '$10.30', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000' },
    { name: 'Jeans bag for travel for men', price: '$80.95', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <section className="recommended" style={{ padding: '1rem 0' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recommended items</h3>
        <div className="recommended-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.2rem' }}>
          {items.map((item, index) => (
            <div key={index} style={{ 
              backgroundColor: 'var(--white)', 
              padding: '1.2rem', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--gray-400)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
              <p style={{ fontWeight: '600' }}>{item.price}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: '1.3' }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendedItems
