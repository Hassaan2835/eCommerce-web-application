import React from 'react'
import { FaUser, FaComment, FaHeart, FaShoppingCart, FaBars, FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid var(--gray-400)', padding: '1rem 0' }}>
      <div className="container header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
          <div style={{ 
            backgroundColor: 'var(--primary-color)', 
            padding: '8px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(13, 110, 253, 0.2)'
          }}>
            <FaShoppingCart style={{ color: 'white', fontSize: '1.4rem' }} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#8CB7F5', letterSpacing: '-0.5px' }}>Brand</span>
        </div>
        
        <div className="search-bar" style={{ 
          flex: 1, 
          display: 'flex', 
          border: '2px solid var(--primary-color)', 
          borderRadius: '8px',
          overflow: 'hidden',
          maxWidth: '660px',
          marginLeft: '2rem',
          marginRight: '2rem'
        }}>
          <input 
            type="text" 
            placeholder="Search" 
            style={{ 
              flex: 1, 
              padding: '0.7rem 1.2rem', 
              fontSize: '1rem',
              border: 'none',
              outline: 'none'
            }} 
          />
          <div style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--gray-400)', backgroundColor: 'transparent' }}>
            <select style={{ 
              padding: '0 1rem', 
              border: 'none', 
              outline: 'none',
              background: 'transparent',
              fontSize: '0.95rem',
              cursor: 'pointer',
              color: 'var(--dark-color)',
              height: '100%'
            }}>
              <option>All category</option>
            </select>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ 
              borderRadius: '0', 
              padding: '0 1.8rem',
              fontSize: '1rem',
              fontWeight: '600',
              border: 'none'
            }}
            onClick={() => window.location.href = '/listing'}
          >
            Search
          </button>
        </div>
        
        <div className="user-actions" style={{ display: 'flex', gap: '1.8rem', color: 'var(--gray-500)', textAlign: 'center' }}>
          <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaUser style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>Profile</div>
          </div>
          <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaComment style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>Message</div>
          </div>
          <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FaHeart style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>Orders</div>
          </div>
          <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => window.location.href = '/cart'}>
            <FaShoppingCart style={{ fontSize: '1.3rem', marginBottom: '4px' }} />
            <div style={{ fontSize: '0.75rem' }}>My cart</div>
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
