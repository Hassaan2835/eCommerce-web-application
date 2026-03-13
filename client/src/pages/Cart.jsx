import React from 'react'

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'T-shirts with multiple colors, for men', price: '78.99', size: 'Medium', color: 'Blue', seller: 'Guangzhou, China', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, name: 'Mens Long Sleeve T-shirt Cotton', price: '39.00', size: 'Large', color: 'White', seller: 'Guangzhou, China', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>My cart (3)</h2>
      
      <div className="cart-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        <div className="cart-items-list">
          <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
            {cartItems.map((item, index) => (
              <div key={item.id} className="cart-item" style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                paddingBottom: '1.5rem', 
                marginBottom: '1.5rem', 
                borderBottom: index !== cartItems.length - 1 ? '1px solid var(--gray-400)' : 'none' 
              }}>
                <div style={{ width: '100px', height: '100px', border: '1px solid var(--gray-400)', borderRadius: '4px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item.name}</h4>
                    <span style={{ fontWeight: 'bold' }}>${item.price}</span>
                  </div>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Size: {item.size}, Color: {item.color}, Seller: {item.seller}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'red', border: '1px solid var(--gray-400)', padding: '0.3rem 0.8rem' }}>Remove</button>
                    <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)', padding: '0.3rem 0.8rem' }}>Save for later</button>
                  </div>
                </div>
                <div style={{ width: '100px' }}>
                  <select style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--gray-400)', borderRadius: '4px' }}>
                    <option>Qty: 1</option>
                    <option>Qty: 2</option>
                    <option>Qty: 3</option>
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-400)' }}>
             <button className="btn" style={{ backgroundColor: 'var(--primary-color)' }} onClick={() => window.location.href = '/'}>← Back to shop</button>
             <button className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary-color)', border: '1px solid var(--gray-400)' }}>Remove all</button>
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
              <span>$1403.97</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: 'red' }}>
              <span>Discount:</span>
              <span>-$60.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#00B517' }}>
              <span>Tax:</span>
              <span>+$14.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem', borderTop: '1px solid var(--gray-400)', paddingTop: '1rem' }}>
              <span>Total:</span>
              <span>$1357.97</span>
            </div>
            <button className="btn" style={{ width: '100%', backgroundColor: '#00B517', fontSize: '1.1rem', padding: '1rem' }}>Checkout</button>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="visa" style={{ height: '15px' }} />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="mastercard" style={{ height: '15px' }} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Cart
