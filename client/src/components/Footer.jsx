import React from 'react';
import { MdShoppingBag } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    { title: 'About', links: ['About Us', 'Find store', 'Categories', 'Blogs'] },
    { title: 'Partnership', links: ['About Us', 'Find store', 'Categories', 'Blogs'] },
    { title: 'Information', links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'] },
    { title: 'For users', links: ['Login', 'Register', 'Settings', 'My Orders'] },
  ];

  const socialIcons = [
    { icon: <FaFacebook />, color: '#bdc4cd' },
    { icon: <FaTwitter />, color: '#bdc4cd' },
    { icon: <FaLinkedinIn />, color: '#bdc4cd' },
    { icon: <FaInstagram />, color: '#bdc4cd' },
    { icon: <FaYoutube />, color: '#bdc4cd' },
  ];

  return (
    <footer style={{ backgroundColor: '#FFFFFF', padding: '2.5rem 0 1.5rem' }}>
      <div className="container footer-grid" style={{ 
        display: 'grid', 
        gap: '2rem', 
        paddingBottom: '2.5rem',
        borderBottom: '1px solid #E3E8EE'
      }}>
        {/* Brand Section */}
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
            <div style={{ 
              backgroundColor: '#0D6EFD', 
              width: '36px', 
              height: '36px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <MdShoppingBag style={{ color: 'white', fontSize: '1.3rem' }} />
            </div>
            <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#8CB7F5' }}>Brand</span>
          </div>
          <p style={{ color: '#505050', lineHeight: '1.5', marginBottom: '1.5rem', maxWidth: '280px', fontSize: '0.95rem' }}>
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            {socialIcons.map((item, idx) => (
              <div key={idx} style={{ 
                width: '30px', 
                height: '30px', 
                backgroundColor: item.color, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {footerLinks.map((section, idx) => (
          <div key={idx} className="footer-links-col">
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.2rem', color: '#1C1C1C' }}>{section.title}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0 }}>
              {section.links.map((link, lIdx) => (
                <li key={lIdx} style={{ color: '#8B96A5', fontSize: '0.9rem', cursor: 'pointer' }}>{link}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Get App Section */}
        <div className="footer-app-links">
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.2rem', color: '#1C1C1C' }}>Get app</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <button style={{ 
              backgroundColor: '#1C1C1C', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              padding: '0.4rem 0.8rem', 
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              width: 'fit-content'
            }}>
              <FaApple style={{ fontSize: '1.2rem' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.6rem', marginBottom: '1px' }}>Download on the</p>
                <p style={{ fontSize: '0.8rem', fontWeight: '600' }}>App Store</p>
              </div>
            </button>
            <button style={{ 
              backgroundColor: '#1C1C1C', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              padding: '0.4rem 0.8rem', 
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              width: 'fit-content'
            }}>
              <FaGooglePlay style={{ fontSize: '1rem' }} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.6rem', marginBottom: '1px' }}>GET IT ON</p>
                <p style={{ fontSize: '0.8rem', fontWeight: '600' }}>Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="container footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', color: '#606060', fontSize: '0.9rem' }}>
        <p>© 2026 Ecommerce.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <span>English</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
