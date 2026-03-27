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
        <div className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
          <div className="cart-items-list">
            <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
              {cartItems.map((item, index) => (
                <div key={item._id} className="cart-item" style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  paddingBottom: '1.5rem', 
                  marginBottom: '1.5rem', 
                  borderBottom: index !== cartItems.length - 1 ? '1px solid var(--gray-400)' : 'none' 
                }}>
                  <div 
                    style={{ width: '100px', height: '100px', border: '1px solid var(--gray-400)', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => navigate(`/details/${item._id}`)}
                  >
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h4 
                        style={{ fontSize: '1.1rem', fontWeight: '500', cursor: 'pointer' }}
                        onClick={() => navigate(`/details/${item._id}`)}
                      >
                        {item.name}
                      </h4>
                      <span style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      Category: {item.category}, Price: ${item.price} each
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button 
                        className="btn" 
                        onClick={() => removeFromCart(item._id)}
                        style={{ backgroundColor: 'var(--white)', color: 'red', border: '1px solid var(--gray-400)', padding: '0.3rem 0.8rem' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ width: '120px' }}>
                    <div style={{ display: 'flex', border: '1px solid var(--gray-400)', borderRadius: '4px' }}>
                      <button onClick={() => updateQuantity(item._id, item.quantity - 1)} style={{ padding: '0.3rem 0.6rem', border: 'none', background: 'none' }}>-</button>
                      <input type="number" value={item.quantity} readOnly style={{ width: '40px', textAlign: 'center', border: 'none', borderLeft: '1px solid var(--gray-400)', borderRight: '1px solid var(--gray-400)' }} />
                      <button onClick={() => updateQuantity(item._id, item.quantity + 1)} style={{ padding: '0.3rem 0.6rem', border: 'none', background: 'none' }}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
               <button className="btn btn-primary" onClick={() => navigate('/')}>← Back to shop</button>
               <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)' }} onClick={clearCart}>Remove all</button>
            </div>
          </div>

          <aside className="cart-summary">
            <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)', marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem' }}>Have coupon?</p>
              <div style={{ display: 'flex' }}>
                <input type="text" placeholder="Add coupon" style={{ flex: 1, padding: '0.5rem', border: '1px solid var(--gray-400)', borderRadius: '4px 0 0 4px' }} />
                <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)', borderLeft: 'none', borderRadius: '0 4px 4px 0' }}>Apply</button>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: 'red' }}>
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#00B517' }}>
                <span>Tax (5%):</span>
                <span>+${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem', borderTop: '1px solid var(--gray-400)', paddingTop: '1rem' }}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                className="btn" 
                style={{ width: '100%', backgroundColor: '#00B517', fontSize: '1.1rem', padding: '1rem' }} 
                onClick={() => {
                  clearCart();
                  navigate('/success');
                }}
              >
                Checkout
              </button>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" style={{ height: '15px' }} />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" style={{ height: '15px' }} />
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart
