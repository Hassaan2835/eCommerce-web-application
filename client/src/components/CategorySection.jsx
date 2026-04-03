import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategorySection = ({ title, bannerImage, products = [] }) => {
  const navigate = useNavigate();
  
  return (
    <section className="category-section" style={{ padding: '0.8rem 0' }}>
      <div className="container category-container" style={{
        display: 'flex',
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        borderLeft: '1px solid var(--gray-400)',
        borderRight: '1px solid var(--gray-400)',
        borderBottom: '1px solid var(--gray-400)',
        borderTop: '3px solid #0D63F3',
        overflow: 'hidden'
      }}>
        {/* Banner */}
        <div className="category-banner" style={{
          width: '280px',
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '1rem'
        }}>
          <h3 style={{ maxWidth: '140px', fontSize: '1.25rem', fontWeight: 'bold', color: '#1C1C1C' }}>{title}</h3>
          <button
            className="btn"
            style={{
              backgroundColor: 'white',
              color: 'var(--dark-color)',
              border: 'none',
              cursor: 'pointer',
              width: 'fit-content',
              padding: '0.6rem 1.2rem',
              fontWeight: '600',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0px 1px 2px rgba(56, 56, 56, 0.08)',
              fontSize: '0.9rem'
            }}
            onClick={() => navigate('/listing')}
          >
            Source now
          </button>
        </div>

        {/* Product Grid */}
        <div className="category-product-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          flex: 1,
          backgroundColor: 'var(--gray-200)',
          gap: '1px' // Creates thin border look between items
        }}>
          {(products || []).map((product, index) => (
            <div 
              key={product._id || index} 
              onClick={() => product._id && navigate(`/details/${product._id}`)}
              style={{
                padding: '1.2rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
                minHeight: '140px',
                backgroundColor: 'var(--white)',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.05)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: 'var(--dark-color)', 
                  margin: 0,
                  fontWeight: '500',
                  lineHeight: '1.3',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {product.name}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', margin: 0 }}>From</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', margin: 0, fontWeight: '500' }}>USD {product.price}</p>
                </div>
              </div>
              <div style={{ width: '80px', height: '80px', flexShrink: 0 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          ))}
          {!products?.length && <div style={{ padding: '2rem', textAlign: 'center', gridColumn: 'span 4', backgroundColor: 'white' }}>Loading category products...</div>}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
