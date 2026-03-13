import React from 'react'

const ProductDetails = () => {
  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      {/* Breadcrumbs */}
      <div className="breadcrumbs" style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>Home</span> &gt; Electronics &gt; Cameras &gt; Canon Camera
      </div>

      <div className="product-details" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr 1fr', gap: '2rem', backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
        {/* Gallery */}
        <div className="product-gallery">
          <div style={{ border: '1px solid var(--gray-400)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1rem' }}>
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000" alt="Product" style={{ width: '100%' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             {[1,2,3,4,5].map(i => (
               <div key={i} style={{ width: '50px', height: '50px', border: '1px solid var(--gray-400)', borderRadius: '4px', overflow: 'hidden' }}>
                 <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=100" alt="thumb" style={{ width: '100%' }} />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <span style={{ color: '#00B517', fontSize: '0.9rem' }}>✓ In stock</span>
          <h2 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>Mens Long Sleeve T-shirt Cotton Base Layer Slim Fit</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
            <span style={{ color: '#FF9017' }}>★★★★☆ 9.3</span>
            <span>• 32 reviews</span>
            <span>• 154 sold</span>
          </div>

          <div style={{ backgroundColor: '#FFF0DF', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', display: 'flex', gap: '2rem' }}>
             <div>
               <span style={{ color: 'red', fontSize: '1.2rem', fontWeight: 'bold' }}>$98.00</span>
               <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>50-100 pcs</p>
             </div>
             <div style={{ borderLeft: '1px solid var(--gray-400)', paddingLeft: '2rem' }}>
               <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>$90.00</span>
               <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>100-700 pcs</p>
             </div>
             <div style={{ borderLeft: '1px solid var(--gray-400)', paddingLeft: '2rem' }}>
               <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>$78.00</span>
               <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>700+ pcs</p>
             </div>
          </div>

          <table style={{ width: '100%', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <tbody>
              <tr><td style={{ color: 'var(--gray-500)', width: '100px', padding: '0.3rem 0' }}>Price:</td><td>Negotiable</td></tr>
              <tr><td style={{ color: 'var(--gray-500)', padding: '0.3rem 0' }}>Type:</td><td>Classic shoes</td></tr>
              <tr><td style={{ color: 'var(--gray-500)', padding: '0.3rem 0' }}>Material:</td><td>Plastic material</td></tr>
              <tr><td style={{ color: 'var(--gray-500)', padding: '0.3rem 0' }}>Design:</td><td>Modern design</td></tr>
            </tbody>
          </table>
        </div>

        {/* Seller Info Card */}
        <aside style={{ border: '1px solid var(--gray-400)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
           <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
             <div style={{ width: '50px', height: '50px', backgroundColor: '#E0F0FF', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'var(--primary-color)' }}>R</div>
             <div>
               <p style={{ fontWeight: '500' }}>Supplier</p>
               <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Guanjzhou, China</p>
             </div>
           </div>
           <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
             <li style={{ marginBottom: '0.5rem' }}>Germany, Berlin</li>
             <li style={{ marginBottom: '0.5rem' }}>Verified Seller</li>
             <li>Worldwide shipping</li>
           </ul>
           <button className="btn" style={{ width: '100%', marginBottom: '0.5rem', backgroundColor: 'var(--primary-color)' }}>Send inquiry</button>
           <button className="btn" style={{ width: '100%', backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)' }}>Seller's profile</button>
        </aside>
      </div>
    </div>
  )
}

export default ProductDetails
