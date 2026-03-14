import React from 'react'

const CategorySection = ({ title, bannerImage, products }) => {
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
              backgroundColor: 'var(--white)', 
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
            onClick={() => window.location.href = '/listing'}
          >
            Source now
          </button>
        </div>

        {/* Product Grid */}
        <div className="category-product-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gridTemplateRows: 'repeat(2, 1fr)', 
          flex: 1 
        }}>
          {products.map((product, index) => (
            <div key={index} style={{ 
              padding: '1.2rem 1.2rem', 
              borderLeft: '1px solid var(--gray-400)', 
              borderBottom: index < 4 ? '1px solid var(--gray-400)' : 'none',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              height: '130px',
              backgroundColor: 'var(--white)',
              gap: '0.5rem'
            }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1rem', color: 'var(--dark-color)', marginBottom: '4px' }}>{product.name}</p>
                <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: '1.2' }}>
                  From <br/> USD {product.price}
                </span>
              </div>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'contain', 
                  alignSelf: 'flex-end',
                  marginBottom: '-0.4rem'
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
