import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/CartContext'

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
        const response = await axios.get(`http://localhost:5000/api/products/${id}?_t=${Date.now()}`);
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

      <div className="product-details" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr 1fr', gap: '2rem', backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
        {/* Gallery */}
        <div className="product-gallery">
          <div style={{ border: '1px solid var(--gray-400)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1rem' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             {[1,2,3,4,5].map(i => (
               <div key={i} style={{ width: '50px', height: '50px', border: '1px solid var(--gray-400)', borderRadius: '4px', overflow: 'hidden' }}>
                 <img src={product.image} alt="thumb" style={{ width: '100%' }} />
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <span style={{ color: '#00B517', fontSize: '0.9rem' }}>✓ {product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
          <h2 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{product.name}</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
            <span style={{ color: '#FF9017' }}>★★★★☆ 4.5</span>
            <span>• 32 reviews</span>
            <span>• 154 sold</span>
          </div>

          <div style={{ backgroundColor: '#FFF0DF', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', display: 'flex', gap: '2rem' }}>
             <div>
               <span style={{ color: 'red', fontSize: '1.2rem', fontWeight: 'bold' }}>${product.price}</span>
               <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>Price</p>
             </div>
          </div>

          <table style={{ width: '100%', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <tbody>
              <tr><td style={{ color: 'var(--gray-500)', width: '100px', padding: '0.3rem 0' }}>Category:</td><td>{product.category}</td></tr>
              <tr><td style={{ color: 'var(--gray-500)', padding: '0.3rem 0' }}>Condition:</td><td>Brand new</td></tr>
              <tr><td style={{ color: 'var(--gray-500)', padding: '0.3rem 0' }}>Material:</td><td>Mixed Material</td></tr>
              <tr><td style={{ color: 'var(--gray-500)', padding: '0.3rem 0' }}>Stock:</td><td>{product.stock}</td></tr>
            </tbody>
          </table>
          <p style={{ color: '#505050', lineHeight: '1.6', marginBottom: '1.5rem' }}>{product.description}</p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', border: '1px solid var(--gray-400)', borderRadius: '4px' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ padding: '0.5rem 1rem', border: 'none', background: 'none' }}>-</button>
              <input type="number" value={quantity} readOnly style={{ width: '40px', textAlign: 'center', border: 'none', borderLeft: '1px solid var(--gray-400)', borderRight: '1px solid var(--gray-400)' }} />
              <button onClick={() => setQuantity(q => q + 1)} style={{ padding: '0.5rem 1rem', border: 'none', background: 'none' }}>+</button>
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleAddToCart}
              style={{ padding: '0.7rem 2rem' }}
            >
              Add to cart
            </button>
            {addedMessage && <span style={{ color: '#00B517', fontSize: '0.9rem' }}>Added successfully!</span>}
          </div>
        </div>

        {/* Seller Info Card */}
        <aside style={{ border: '1px solid var(--gray-400)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
           <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
             <div style={{ width: '50px', height: '50px', backgroundColor: '#E0F0FF', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: 'var(--primary-color)' }}>B</div>
             <div>
               <p style={{ fontWeight: '500' }}>Official Brand</p>
               <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>Manufacturer</p>
             </div>
           </div>
           <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
             <li style={{ marginBottom: '0.5rem' }}>Global Shipping</li>
             <li style={{ marginBottom: '0.5rem' }}>Verified Seller</li>
             <li>Secure Payment</li>
           </ul>
           <button className="btn btn-primary" style={{ width: '100%', marginBottom: '0.5rem' }}>Send inquiry</button>
           <button className="btn" style={{ width: '100%', backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)' }}>Seller's profile</button>
        </aside>
      </div>
    </div>
  )
}

export default ProductDetails
