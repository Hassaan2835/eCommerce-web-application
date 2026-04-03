import React from 'react'
import { FaSearch, FaBox, FaPaperPlane, FaShieldAlt } from 'react-icons/fa'

const ExtraServices = () => {
  const services = [
    { title: 'Source from Industry Hubs', icon: <FaSearch />, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Customize Your Products', icon: <FaBox />, image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Fast, reliable shipping by ocean or air', icon: <FaPaperPlane />, image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Product monitoring and inspection', icon: <FaShieldAlt />, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
  ];

  return (
    <section className="extra-services" style={{ padding: '1rem 0' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Our extra services</h3>
        <div className="services-grid" style={{ display: 'grid', gap: '1.2rem' }}>
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ 
              backgroundColor: 'var(--white)', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--gray-400)',
              overflow: 'hidden',
              position: 'relative',
              height: '100%'
            }}>
              <div style={{ height: '120px', backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '1.2rem', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-25px', 
                  right: '25px', 
                  width: '44px', 
                  height: '44px', 
                  backgroundColor: '#D1E7FF', 
                  border: '2px solid white',
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: 'var(--dark-color)'
                }}>
                  {service.icon}
                </div>
                <p style={{ fontWeight: '500', maxWidth: '160px', fontSize: '0.9rem', margin: 0, lineHeight: '1.4' }}>{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtraServices
