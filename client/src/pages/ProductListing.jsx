import React from 'react'

const ProductListing = () => {
  const products = [
    { id: 1, name: 'Canon Cmera EOS 2000D 10x zoom', price: '998.00', rating: 4.5, description: 'Canon Cmera EOS 2000D 10x zoom. High quality images and videos.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, name: 'GoPro HERO6 Black 4K Action Camera', price: '299.00', rating: 4.8, description: 'GoPro HERO6 Black 4K Action Camera. Waterproof and durable.', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, name: 'Logitech G933 Artemis Spectrum', price: '150.00', rating: 4.2, description: 'Logitech G933 Artemis Spectrum. Wireless Gaming Headset.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, name: 'Microsoft Surface Pro 7', price: '799.00', rating: 4.7, description: 'Microsoft Surface Pro 7. Ultra-light and versatile.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, name: 'Apple iPhone 12 Pro Max', price: '1099.00', rating: 4.9, description: 'Apple iPhone 12 Pro Max. The ultimate iPhone experience.', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000' },
    { id: 6, name: 'Sony PlayStation 5 Console', price: '499.00', rating: 4.8, description: 'Sony PlayStation 5 Console. The next generation of gaming.', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      {/* Breadcrumbs */}
      <div className="breadcrumbs" style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>Home</span> &gt; Electronics &gt; Cameras
      </div>

      <div className="listing-layout" style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
        {/* Sidebar Filters */}
        <aside className="filters">
          <div className="filter-group" style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', borderTop: '1px solid var(--gray-400)', paddingTop: '1rem' }}>Category</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Mobile accessory</li>
              <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Electronics</li>
              <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Smartphones</li>
              <li style={{ marginBottom: '0.5rem', cursor: 'pointer' }}>Modern tech</li>
            </ul>
          </div>

          <div className="filter-group" style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', borderTop: '1px solid var(--gray-400)', paddingTop: '1rem' }}>Brands</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label><input type="checkbox" /> Samsung</label>
              <label><input type="checkbox" /> Apple</label>
              <label><input type="checkbox" /> Huawei</label>
              <label><input type="checkbox" /> Pocco</label>
              <label><input type="checkbox" /> Lenovo</label>
            </div>
          </div>

          <div className="filter-group" style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', borderTop: '1px solid var(--gray-400)', paddingTop: '1rem' }}>Price range</h4>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input type="number" placeholder="0" style={{ width: '100px', padding: '0.5rem', border: '1px solid var(--gray-400)', borderRadius: '4px' }} />
              <input type="number" placeholder="999999" style={{ width: '100px', padding: '0.5rem', border: '1px solid var(--gray-400)', borderRadius: '4px' }} />
            </div>
            <button className="btn" style={{ width: '100%', backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)' }}>Apply</button>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main>
          {/* Top Bar */}
          <div className="product-list-topbar" style={{ 
            backgroundColor: 'var(--white)', 
            padding: '1rem', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--gray-400)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <span>12,948 items in <b>Mobile accessory</b></span>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <select style={{ padding: '0.5rem', border: '1px solid var(--gray-400)', borderRadius: '4px' }}>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <button className="btn" style={{ padding: '0.5rem', border: '1px solid var(--gray-400)', backgroundColor: 'var(--white)' }}>Grid</button>
              <button className="btn" style={{ padding: '0.5rem', border: '1px solid var(--gray-400)', backgroundColor: 'var(--white)' }}>List</button>
            </div>
          </div>

          {/* Grid */}
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {products.map(product => (
              <div 
                key={product.id} 
                className="product-card" 
                style={{ 
                  backgroundColor: 'var(--white)', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--gray-400)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => window.location.href = `/details/${product.id}`}
              >
                <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#eee' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '500' }}>${product.price}</h4>
                    <button style={{ background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer' }}>♡</button>
                  </div>
                  <p style={{ color: 'var(--gray-600)', fontSize: '0.9rem', marginBottom: '1rem' }}>{product.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem', gap: '0.5rem' }}>
            <button className="btn" style={{ backgroundColor: 'var(--white)', border: '1px solid var(--gray-400)' }}>1</button>
            <button className="btn" style={{ backgroundColor: 'var(--white)', border: '1px solid var(--gray-400)' }}>2</button>
            <button className="btn" style={{ backgroundColor: 'var(--white)', border: '1px solid var(--gray-400)' }}>3</button>
            <button className="btn" style={{ backgroundColor: 'var(--white)', border: '1px solid var(--gray-400)' }}>Next</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProductListing
