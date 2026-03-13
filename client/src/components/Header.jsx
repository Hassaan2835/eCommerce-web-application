import React from 'react'
import { FaUser, FaComment, FaHeart, FaShoppingCart, FaBars, FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-400)' }}>
      <div className="container header-container" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
          <img src="/logo.svg" alt="Brand" style={{ height: '40px' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8CB7F5' }}>Brand</span>
        </div>
        
        <div className="search-bar hide-mobile" style={{ flex: 1, margin: '0 3rem', display: 'flex' }}>
          <input 
            type="text" 
            placeholder="Search" 
            style={{ 
              flex: 1, 
              padding: '0.6rem 1rem', 
              border: '2px solid var(--primary-color)', 
              borderRadius: '6px 0 0 6px' 
            }} 
          />
          <select style={{ padding: '0 1rem', borderTop: '2px solid var(--primary-color)', borderBottom: '2px solid var(--primary-color)', borderLeft: '1px solid var(--gray-400)' }}>
            <option>All category</option>
          </select>
          <button 
            className="btn" 
            style={{ borderRadius: '0 6px 6px 0' }}
            onClick={() => window.location.href = '/listing'}
          >
            Search
          </button>
        </div>
        
        <div className="user-actions" style={{ display: 'flex', gap: '1.5rem', color: 'var(--gray-500)', fontSize: '0.8rem', textAlign: 'center' }}>
          <div style={{ cursor: 'pointer' }}>
            <FaUser style={{ fontSize: '1.2rem', marginBottom: '4px' }} />
            <div>Profile</div>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <FaComment style={{ fontSize: '1.2rem', marginBottom: '4px' }} />
            <div>Message</div>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <FaHeart style={{ fontSize: '1.2rem', marginBottom: '4px' }} />
            <div>Orders</div>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/cart'}>
            <FaShoppingCart style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }} />
            <div>My cart</div>
          </div>
        </div>
      </div>
      
      <nav style={{ borderTop: '1px solid var(--gray-400)', height: 'var(--nav-height)' }}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '500', cursor: 'pointer' }}>
            <li 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
              onClick={() => window.location.href = '/listing'}
            >
              <FaBars /> All category
            </li>
            <li className="hide-mobile">Hot offers</li>
            <li className="hide-mobile">Gift boxes</li>
            <li className="hide-mobile">Projects</li>
            <li className="hide-mobile">Menu item</li>
            <li className="hide-mobile">Help</li>
          </ul>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span>English, USD</span>
            <span>Ship to 🇩🇪</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
