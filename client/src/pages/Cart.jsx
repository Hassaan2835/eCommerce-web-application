import React from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  
  const tax = subtotal * 0.05
  const discount = subtotal > 500 ? 50 : 0
  const total = subtotal + tax - discount

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>My cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
          <h3>Your cart is empty</h3>
          <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/')}>Shop now</button>
        </div>
      ) : (
        <div className="cart-layout" style={{ display: 'grid', gap: '2rem' }}>
          <div className="cart-items-section">
            <div className="cart-items-wrapper" style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
              {cartItems.map((item, index) => (
                <div key={item._id} className="cart-item" style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  paddingBottom: '1.5rem', 
                  marginBottom: '1.5rem', 
                  borderBottom: index !== cartItems.length - 1 ? '1px solid #EEE' : 'none' 
                }}>
                  <div 
                    className="cart-item-img"
                    style={{ width: '80px', height: '80px', border: '1px solid #DEE2E7', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', flexShrink: 0, padding: '0.4rem', backgroundColor: '#F7F8FA' }}
                    onClick={() => navigate(`/details/${item._id}`)}
                  >
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="cart-item-info" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className="cart-item-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <h4 
                        style={{ fontSize: '1rem', fontWeight: '500', cursor: 'pointer', color: '#1C1C1C', lineHeight: '1.4' }}
                        onClick={() => navigate(`/details/${item._id}`)}
                      >
                        {item.name}
                      </h4>
                      <span className="cart-item-price" style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1C1C1C' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem' }}>
                      Category: {item.category}
                    </p>
                    <div className="cart-item-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', flexWrap: 'wrap', gap: '1rem' }}>
                      <div className="quantity-controls" style={{ display: 'flex', border: '1px solid #DEE2E7', borderRadius: '6px', backgroundColor: '#F7F8FA' }}>
                        <button onClick={() => updateQuantity(item._id, item.quantity - 1)} style={{ padding: '0.4rem 0.8rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>-</button>
                        <input type="number" value={item.quantity} readOnly style={{ width: '40px', textAlign: 'center', border: 'none', borderLeft: '1px solid #DEE2E7', borderRight: '1px solid #DEE2E7', background: 'white', outline: 'none', fontWeight: '500' }} />
                        <button onClick={() => updateQuantity(item._id, item.quantity + 1)} style={{ padding: '0.4rem 0.8rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>+</button>
                      </div>
                      <button 
                        className="btn-outline" 
                        onClick={() => removeFromCart(item._id)}
                        style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#EB001B', border: '1px solid #DEE2E7', borderRadius: '6px', background: 'white', cursor: 'pointer' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-action-buttons" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--white)', padding: '1.2rem 1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)', gap: '1rem' }}>
               <button className="btn btn-primary" onClick={() => navigate('/')} style={{ padding: '0.7rem 1.5rem' }}>← Back to shop</button>
               <button className="btn-outline" style={{ color: '#0D6EFD', border: '1px solid #DEE2E7', padding: '0.7rem 1.5rem', borderRadius: '6px', background: 'white', fontWeight: '500' }} onClick={clearCart}>Remove all</button>
            </div>
          </div>

          <aside className="cart-summary">
            <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)', marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', color: 'var(--gray-600)', fontSize: '0.95rem' }}>Have coupon?</p>
              <div style={{ display: 'flex' }}>
                <input type="text" placeholder="Add coupon" style={{ flex: 1, padding: '0.6rem', border: '1px solid #DEE2E7', borderRadius: '6px 0 0 6px', outline: 'none' }} />
                <button className="btn" style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--white)', color: '#0D6EFD', border: '1px solid #DEE2E7', borderLeft: 'none', borderRadius: '0 6px 6px 0', fontWeight: '600' }}>Apply</button>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: 'var(--gray-600)', fontSize: '1rem' }}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#EB001B' }}>
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#00B517' }}>
                <span>Tax (5%):</span>
                <span>+${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem', borderTop: '1px solid #EEE', paddingTop: '1rem', color: '#1C1C1C' }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '1rem', padding: '1rem', fontWeight: 'bold' }} 
                onClick={() => {
                  clearCart();
                  navigate('/success');
                }}
              >
                Checkout
              </button>
              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1.2rem' }}>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" style={{ height: '14px' }} />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" style={{ height: '14px' }} />
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart
