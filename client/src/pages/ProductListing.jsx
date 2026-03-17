import React, { useState } from 'react';
import { MdFavoriteBorder, MdStar, MdStarBorder, MdGridView, MdList } from 'react-icons/md';
import Newsletter from '../components/Newsletter';

const ProductListing = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const products = [
    {
      id: 1,
      name: 'Apple iPhone 13 Pro Max - Red',
      price: '99.50',
      oldPrice: '1128.00',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1772868087002-fc31b6e1e5c2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Apple iPhone 13 Pro Max - Pacific Blue',
      price: '99.50',
      oldPrice: '1128.00',
      rating: '5.9',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S22 Ultra - Phantom Gray',
      price: '99.50',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000'
    },
    {
      id: 4,
      name: 'Apple iPad Air 10.9-inch (M1) - Space Gray',
      price: '99.50',
      oldPrice: '1128.00',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000'
    },
    {
      id: 5,
      name: 'Canon EOS 2000D DSLR Camera with EF-S 18-55mm',
      price: '99.50',
      oldPrice: '1128.00',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000'
    },
    {
      id: 6,
      name: 'Apple iPhone 13 Pro Max - Pacific Blue',
      price: '99.50',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000'
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 14-inch (M1 Pro) - Space Gray',
      price: '99.50',
      oldPrice: '1128.00',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000'
    },
    {
      id: 8,
      name: 'Apple Watch Series 7 (GPS) - Silver Aluminum',
      price: '99.50',
      oldPrice: '1128.00',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000'
    },
    {
      id: 9,
      name: 'Apple iPhone 13 Pro Max - Red',
      price: '99.50',
      rating: '7.5',
      orders: '154',
      shipping: 'Free Shipping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1772868087002-fc31b6e1e5c2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <div style={{ backgroundColor: '#F7F8FA', minHeight: '100vh', padding: '1rem 0' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{ padding: '1rem 0', color: '#8B96A5', fontSize: '0.95rem' }}>
          Home &gt; Clothings &gt; Men's wear &gt; Summer clothing
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '1.5rem', alignItems: 'start' }}>
          {/* Sidebar */}
          <aside>
            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Category</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, color: '#505050', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li>Mobile accessory</li>
                <li>Electronics</li>
                <li>Smartphones</li>
                <li>Modern tech</li>
                <li style={{ color: '#0D6EFD', cursor: 'pointer' }}>See all</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Brands</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', color: '#505050' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" defaultChecked={['Samsung', 'Apple', 'Pocco'].includes('Samsung')} /> Samsung</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" defaultChecked /> Apple</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Huawei</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" defaultChecked /> Pocco</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Lenovo</label>
                <span style={{ color: '#0D6EFD', cursor: 'pointer' }}>See all</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Features</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', color: '#505050' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" defaultChecked /> Metallic</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Plastic cover</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> 8GB Ram</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Super power</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Large Memory</label>
                <span style={{ color: '#0D6EFD', cursor: 'pointer' }}>See all</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Price range</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ position: 'relative', height: '4px', backgroundColor: '#E3E8EE', borderRadius: '2px', marginBottom: '1.5rem' }}>
                  <div style={{ position: 'absolute', left: '20%', right: '20%', height: '100%', backgroundColor: '#0D6EFD' }}></div>
                  <div style={{ position: 'absolute', left: '20%', top: '-8px', width: '20px', height: '20px', backgroundColor: 'white', border: '2px solid #0D6EFD', borderRadius: '50%' }}></div>
                  <div style={{ position: 'absolute', right: '20%', top: '-8px', width: '20px', height: '20px', backgroundColor: 'white', border: '2px solid #0D6EFD', borderRadius: '50%' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}>Min</p>
                    <input type="number" placeholder="0" style={{ width: '100%', padding: '0.6rem', border: '1px solid #DEE2E7', borderRadius: '6px' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.85rem', marginBottom: '0.3rem' }}>Max</p>
                    <input type="number" placeholder="999999" style={{ width: '100%', padding: '0.6rem', border: '1px solid #DEE2E7', borderRadius: '6px' }} />
                  </div>
                </div>
              </div>
              <button style={{ width: '100%', padding: '0.7rem', backgroundColor: 'white', border: '1px solid #DEE2E7', borderRadius: '6px', color: '#0D6EFD', fontWeight: '600', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>Apply</button>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Condition</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', color: '#505050' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="radio" name="condition" defaultChecked /> Any</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="radio" name="condition" /> Refurbished</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="radio" name="condition" /> Brand new</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="radio" name="condition" /> Old items</label>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Ratings</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[5, 4, 3, 2].map(num => (
                  <label key={num} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <input type="checkbox" defaultChecked={num >= 3} />
                    <div style={{ display: 'flex', color: '#FF9017' }}>
                      {[...Array(5)].map((_, i) => i < num ? <MdStar key={i} /> : <MdStarBorder key={i} />)}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Manufacturer</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Top Bar */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '0.8rem 1.2rem', 
              borderRadius: '6px', 
              border: '1px solid #DEE2E7',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{ color: '#1C1C1C' }}>
                12,911 items in <b>Mobile accessory</b>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <input type="checkbox" /> Verified only
                </label>
                <select style={{ padding: '0.5rem 1rem', border: '1px solid #DEE2E7', borderRadius: '6px', outline: 'none' }}>
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                </select>
                <div style={{ display: 'flex', border: '1px solid #DEE2E7', borderRadius: '6px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setViewMode('grid')}
                    style={{ padding: '0.5rem', backgroundColor: viewMode === 'grid' ? '#EFF2F4' : 'white', border: 'none', borderRight: '1px solid #DEE2E7', display: 'flex', cursor: 'pointer' }}
                  >
                    <MdGridView style={{ fontSize: '1.2rem', color: '#1C1C1C' }} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    style={{ padding: '0.5rem', backgroundColor: viewMode === 'list' ? '#EFF2F4' : 'white', border: 'none', display: 'flex', cursor: 'pointer' }}
                  >
                    <MdList style={{ fontSize: '1.2rem', color: '#1C1C1C' }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Tags (Selected Filters) */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {['Samsung', 'Apple', 'Poco', 'Metallic', '4 star', '3 star'].map(tag => (
                <div key={tag} style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #DEE2E7', 
                  color: '#1C1C1C', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '6px', 
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {tag} <span style={{ color: '#8B96A5', cursor: 'pointer', fontSize: '1.1rem' }}>×</span>
                </div>
              ))}
              <span style={{ color: '#0D6EFD', fontSize: '0.9rem', alignSelf: 'center', cursor: 'pointer', marginLeft: '0.5rem' }}>Clear all filter</span>
            </div>

            {/* Product Rendering */}
            {viewMode === 'list' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {products.map(product => (
                  <div key={product.id} style={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #DEE2E7', 
                    borderRadius: '6px', 
                    display: 'flex', 
                    padding: '1.2rem',
                    position: 'relative'
                  }}>
                    <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', padding: '0.5rem', border: '1px solid #DEE2E7', borderRadius: '6px', display: 'flex', cursor: 'pointer' }}>
                      <MdFavoriteBorder style={{ color: '#0D6EFD', fontSize: '1.2rem' }} />
                    </div>
                    
                    <div style={{ width: '210px', height: '210px', minWidth: '210px', marginRight: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1C1C1C', marginBottom: '1rem', maxWidth: '80%' }}>{product.name}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1C1C1C' }}>${product.price}</span>
                        {product.oldPrice && <span style={{ color: '#8B96A5', textDecoration: 'line-through' }}>${product.oldPrice}</span>}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: '#8B96A5', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', color: '#FF9017', alignItems: 'center' }}>
                          <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                          <span style={{ marginLeft: '0.4rem', color: '#FF9017' }}>{product.rating}</span>
                        </div>
                        <span style={{ fontSize: '1.2rem' }}>•</span>
                        <span>{product.orders} orders</span>
                        <span style={{ fontSize: '1.2rem' }}>•</span>
                        <span style={{ color: '#00B517' }}>{product.shipping}</span>
                      </div>

                      <p style={{ color: '#505050', lineHeight: '1.5', marginBottom: '1rem', maxWidth: '90%', fontSize: '0.95rem' }}>
                        {product.description}
                      </p>

                      <span style={{ color: '#0D6EFD', fontWeight: '600', cursor: 'pointer' }}>View details</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {products.map(product => (
                  <div key={product.id} style={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #DEE2E7', 
                    borderRadius: '6px', 
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}>
                    <div style={{ height: '230px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #EEE', margin: '-1rem -1rem 1rem -1rem', padding: '1rem' }}>
                      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    
                    <div style={{ position: 'absolute', top: '16.5rem', right: '1rem', padding: '0.5rem', border: '1px solid #DEE2E7', borderRadius: '6px', display: 'flex', cursor: 'pointer', backgroundColor: 'white' }}>
                      <MdFavoriteBorder style={{ color: '#0D6EFD', fontSize: '1.2rem' }} />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <span style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#1C1C1C' }}>${product.price}</span>
                        {product.oldPrice && <span style={{ color: '#8B96A5', fontSize: '0.85rem', textDecoration: 'line-through' }}>${product.oldPrice}</span>}
                      </div>

                      <div style={{ display: 'flex', color: '#FF9017', alignItems: 'center', gap: '0.3rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex' }}>
                          <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                        </div>
                        <span>{product.rating}</span>
                      </div>

                      <h4 style={{ fontSize: '1rem', fontWeight: '400', color: '#505050', lineHeight: '1.4' }}>{product.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '2.5rem', gap: '0.5rem' }}>
              <select style={{ padding: '0.6rem', border: '1px solid #DEE2E7', borderRadius: '6px', marginRight: '1rem' }}>
                <option>Show 10</option>
                <option>Show 20</option>
                <option>Show 30</option>
              </select>
              <div style={{ display: 'flex', border: '1px solid #DEE2E7', borderRadius: '6px', overflow: 'hidden' }}>
                <button style={{ padding: '0.6rem 0.8rem', backgroundColor: 'white', border: 'none', borderRight: '1px solid #DEE2E7', cursor: 'pointer' }}>&lt;</button>
                <button style={{ padding: '0.6rem 1rem', backgroundColor: '#EFF2F4', border: 'none', borderRight: '1px solid #DEE2E7', fontWeight: 'bold', cursor: 'pointer' }}>1</button>
                <button style={{ padding: '0.6rem 1rem', backgroundColor: 'white', border: 'none', borderRight: '1px solid #DEE2E7', cursor: 'pointer' }}>2</button>
                <button style={{ padding: '0.6rem 1rem', backgroundColor: 'white', border: 'none', borderRight: '1px solid #DEE2E7', cursor: 'pointer' }}>3</button>
                <button style={{ padding: '0.6rem 0.8rem', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>&gt;</button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default ProductListing;
