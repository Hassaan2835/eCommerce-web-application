import React from 'react'

const RegionalSuppliers = () => {
  const regions = [
    { name: 'Arabic Emirates', code: 'ae', url: 'shopname.ae' },
    { name: 'Australia', code: 'au', url: 'shopname.com.au' },
    { name: 'United States', code: 'us', url: 'shopname.com' },
    { name: 'Russia', code: 'ru', url: 'shopname.ru' },
    { name: 'Italy', code: 'it', url: 'shopname.it' },
    { name: 'Denmark', code: 'dk', url: 'shopname.com.dk' },
    { name: 'France', code: 'fr', url: 'shopname.com.fr' },
    { name: 'Arabic Emirates', code: 'ae', url: 'shopname.ae' },
    { name: 'China', code: 'cn', url: 'shopname.com.cn' },
    { name: 'Great Britain', code: 'gb', url: 'shopname.co.uk' },
  ];

  return (
    <section className="regional-suppliers" style={{ padding: '1rem 0' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Suppliers by region</h3>
        <div className="suppliers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
          {regions.map((region, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img 
                src={`https://flagcdn.com/w40/${region.code}.png`} 
                alt={region.name} 
                style={{ width: '28px', height: '20px', borderRadius: '2px' }} 
              />
              <div>
                <p style={{ fontSize: '0.9rem' }}>{region.name}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--gray-500)' }}>{region.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegionalSuppliers
