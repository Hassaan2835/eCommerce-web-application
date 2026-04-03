import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecommendedItems = ({ products }) => {
  const navigate = useNavigate();
  const displayProducts = products && products.length > 0 ? products : [];

  return (
    <section className="recommended" style={{ padding: '0 0 2rem' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Recommended items</h3>
        <div className="recommended-grid" style={{ display: 'grid', gap: '1rem' }}>
          {displayProducts.map((product) => (
            <div 
              key={product._id} 
              onClick={() => navigate(`/details/${product._id}`)}
              className="recommended-item-card"
              style={{ 
                backgroundColor: '#fff', 
                padding: '1.2rem', 
                borderRadius: '6px', 
                border: '1px solid #DEE2E7',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
            >
              <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.3rem' }}>${product.price}</p>
                <p style={{ fontSize: '0.85rem', color: '#8B96A5', lineHeight: '1.4', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {product.name}
                </p>
              </div>
            </div>
          ))}
          {displayProducts.length === 0 && <div style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1' }}>Loading recommendations...</div>}
        </div>
      </div>
    </section>
  )
}

export default RecommendedItems
