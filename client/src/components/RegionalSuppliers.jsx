import aeFlag from '../assets/flags/ae.png'
import auFlag from '../assets/flags/au.png'
import usFlag from '../assets/flags/us.png'
import ruFlag from '../assets/flags/ru.png'
import itFlag from '../assets/flags/it.png'
import dkFlag from '../assets/flags/dk.png'
import frFlag from '../assets/flags/fr.png'
import cnFlag from '../assets/flags/cn.png'
import gbFlag from '../assets/flags/gb.png'

const RegionalSuppliers = () => {
  const regions = [
    { name: 'Arabic Emirates', flag: aeFlag, url: 'shopname.ae' },
    { name: 'Australia', flag: auFlag, url: 'shopname.ae' },
    { name: 'United States', flag: usFlag, url: 'shopname.ae' },
    { name: 'Russia', flag: ruFlag, url: 'shopname.ru' },
    { name: 'Italy', flag: itFlag, url: 'shopname.it' },
    { name: 'Denmark', flag: dkFlag, url: 'denmark.com.dk' },
    { name: 'France', flag: frFlag, url: 'shopname.com.fr' },
    { name: 'Arabic Emirates', flag: aeFlag, url: 'shopname.ae' },
    { name: 'China', flag: cnFlag, url: 'shopname.ae' },
    { name: 'Great Britain', flag: gbFlag, url: 'shopname.co.uk' },
  ];

  return (
    <section className="regional-suppliers" style={{ padding: '1rem 0 3rem' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 'bold' }}>Suppliers by region</h3>
        <div className="suppliers-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          rowGap: '1.5rem',
          columnGap: '2rem'
        }}>
          {regions.map((region, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img 
                src={region.flag} 
                alt={region.name} 
                style={{ width: '28px', height: '20px', borderRadius: '2px', objectFit: 'cover' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '1rem', color: '#1C1C1C', marginBottom: '0.1rem' }}>{region.name}</p>
                <p style={{ fontSize: '0.85rem', color: '#8B96A5' }}>{region.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RegionalSuppliers
