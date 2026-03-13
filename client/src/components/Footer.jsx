import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--white)', padding: '3rem 0 1rem' }}>
      <div className="container footer-container" style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: '3rem', borderBottom: '1px solid var(--gray-400)', paddingBottom: '3rem' }}>
        <div>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8CB7F5' }}>Brand</span>
          </div>
          <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', maxWidth: '280px' }}>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
             {/* Social mock icons */}
             <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--gray-500)', borderRadius: '50%' }}></div>
             <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--gray-500)', borderRadius: '50%' }}></div>
             <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--gray-500)', borderRadius: '50%' }}></div>
             <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--gray-500)', borderRadius: '50%' }}></div>
             <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--gray-500)', borderRadius: '50%' }}></div>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>About</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Partnership</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Information</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>For users</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', color: 'var(--gray-600)', fontSize: '0.9rem' }}>
        <p>© 2023 Ecommerce. </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span>English</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
