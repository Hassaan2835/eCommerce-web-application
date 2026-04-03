import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/CartContext'
import API_BASE_URL from '../api/config'

const ProductDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [addedMessage, setAddedMessage] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}?_t=${Date.now()}`);
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setAddedMessage(true)
    setTimeout(() => setAddedMessage(false), 3000)
  }

  if (loading) return <div className="container" style={{ padding: '2rem' }}>Loading product details...</div>
  if (!product) return <div className="container" style={{ padding: '2rem' }}>Product not found.</div>

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      {/* Breadcrumbs */}
      <div className="breadcrumbs" style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link> &gt; {product.category} &gt; {product.name}
      </div>

      <div className="product-details-layout" style={{ 
        display: 'grid', 
        gap: '2rem', 
        backgroundColor: 'var(--white)', 
        padding: '2rem', 
        borderRadius: 'var(--radius-md)', 
        border: '1px solid var(--gray-400)' 
      }}>
        {/* Gallery */}
        <div className="product-gallery">
          <div style={{ border: '1px solid var(--gray-400)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
             {[1,2,3,4,5].map(i => (
               <div key={i} style={{ minWidth: '50px', height: '50px', border: '1px solid var(--gray-400)', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                 <img src={product.image} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <div className="product-status" style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#00B517', fontSize: '0.9rem', fontWeight: '500' }}>✓ {product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
          </div>
          <h2 className="product-title" style={{ fontSize: '1.5rem', margin: '0.5rem 0', fontWeight: 'bold', lineHeight: '1.3' }}>{product.name}</h2>
          
          <div className="product-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-600)', marginBottom: '1.5rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#FF9017', fontWeight: '600' }}>★★★★☆ 4.5</span>
            <span className="hide-mobile">• 32 reviews</span>
            <span>• 154 sold</span>
          </div>

          <div className="price-box" style={{ backgroundColor: '#FFF0DF', padding: '1.2rem', borderRadius: '4px', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
             <div>
               <span style={{ color: '#EB001B', fontSize: '1.3rem', fontWeight: 'bold' }}>${product.price}</span>
               <p style={{ fontSize: '0.8rem', color: '#8B96A5', marginTop: '0.2rem' }}>Hot price</p>
             </div>
             {product.oldPrice && (
               <div style={{ borderLeft: '1px solid #FFD8A8', paddingLeft: '1.5rem' }}>
                 <span style={{ color: '#8B96A5', fontSize: '1.1rem', textDecoration: 'line-through' }}>${product.oldPrice}</span>
                 <p style={{ fontSize: '0.8rem', color: '#8B96A5', marginTop: '0.2rem' }}>Normal price</p>
               </div>
             )}
          </div>

          <table className="specs-table" style={{ width: '100%', marginBottom: '1.5rem', fontSize: '0.9rem', borderCollapse: 'collapse' }}>
            <tbody>
              <tr><td style={{ color: '#8B96A5', width: '100px', padding: '0.4rem 0' }}>Category:</td><td>{product.category}</td></tr>
              <tr><td style={{ color: '#8B96A5', padding: '0.4rem 0' }}>Condition:</td><td>Brand new</td></tr>
              <tr><td style={{ color: '#8B96A5', padding: '0.4rem 0' }}>Material:</td><td>Mixed Material</td></tr>
              <tr><td style={{ color: '#8B96A5', padding: '0.4rem 0' }}>Stock:</td><td>{product.stock}</td></tr>
            </tbody>
          </table>
          
          <p className="product-description" style={{ color: '#505050', lineHeight: '1.6', marginBottom: '1.5rem', borderTop: '1px solid #EEE', paddingTop: '1.5rem' }}>{product.description}</p>
          
          <div className="add-to-cart-box" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', borderTop: '1px solid #EEE', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', border: '1px solid #DEE2E7', borderRadius: '6px' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ padding: '0.6rem 1rem', border: 'none', background: '#F7F8FA', cursor: 'pointer' }}>-</button>
              <input type="number" value={quantity} readOnly style={{ width: '50px', textAlign: 'center', border: 'none', borderLeft: '1px solid #DEE2E7', borderRight: '1px solid #DEE2E7', outline: 'none', fontSize: '1rem' }} />
              <button onClick={() => setQuantity(q => q + 1)} style={{ padding: '0.6rem 1rem', border: 'none', background: '#F7F8FA', cursor: 'pointer' }}>+</button>
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleAddToCart}
              style={{ padding: '0.7rem 2.5rem', fontWeight: 'bold' }}
            >
              Add to cart
            </button>
            {addedMessage && <span style={{ color: '#00B517', fontSize: '0.95rem', fontWeight: '500' }}>Added successfully!</span>}
          </div>
        </div>

        {/* Seller Info Card */}
        <aside className="seller-card" style={{ border: '1px solid #DEE2E7', borderRadius: 'var(--radius-md)', padding: '1.2rem', height: 'fit-content' }}>
           <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.2rem' }}>
             <div style={{ width: '48px', height: '48px', backgroundColor: '#E0F0FF', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#0D6EFD', fontWeight: 'bold' }}>R</div>
             <div>
               <p style={{ fontWeight: '600', color: '#1C1C1C' }}>Supplier</p>
               <p style={{ fontSize: '0.85rem', color: '#8B96A5' }}>Guanjhou, China</p>
             </div>
           </div>
           <div style={{ borderTop: '1px solid #EEE', paddingTop: '1rem', marginTop: '0.5rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#505050', marginBottom: '1.2rem' }}>
              <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🌍</span> Global Shipping</li>
              <li style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🛡️</span> Verified Seller</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>💳</span> Secure Payment</li>
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button className="btn btn-primary" style={{ width: '100%', padding: '0.7rem' }}>Send inquiry</button>
              <button className="btn" style={{ width: '100%', backgroundColor: 'white', color: '#0D6EFD', border: '1px solid #DEE2E7', padding: '0.7rem', fontWeight: '600' }}>Seller's profile</button>
            </div>
           </div>
        </aside>
      </div>
    </div>
  )
}

export default ProductDetails
