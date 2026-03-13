import React from 'react'

const CategorySection = ({ title, bannerImage, products }) => {
  return (
    <section className="category-section" style={{ padding: '1rem 0' }}>
      <div className="container category-container" style={{ 
        display: 'flex', 
        backgroundColor: 'var(--white)', 
        borderRadius: 'var(--radius-md)', 
        border: '1px solid var(--gray-400)',
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
          gap: '1rem'
        }}>
          <h3 style={{ maxWidth: '150px' }}>{title}</h3>
          <button 
            className="btn" 
            style={{ backgroundColor: 'var(--white)', color: 'var(--dark-color)', border: 'none', cursor: 'pointer' }}
            onClick={() => window.location.href = '/listing'}
          >
            Source now
          </button>
        </div>

        {/* Product Grid */}
        <div className="category-product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', flex: 1 }}>
          {products.map((product, index) => (
            <div key={index} style={{ 
              padding: '1.5rem', 
              borderLeft: '1px solid var(--gray-400)', 
              borderBottom: index < 4 ? '1px solid var(--gray-400)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <p style={{ fontSize: '0.9rem' }}>{product.name}</p>
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>From <br/> USD {product.price}</span>
              </div>
              <img src={product.image} alt={product.name} style={{ width: '80px', height: '80px', objectFit: 'contain', alignSelf: 'flex-end' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
