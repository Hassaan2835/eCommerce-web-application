import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { MdFavoriteBorder, MdStar, MdStarBorder, MdGridView, MdList } from 'react-icons/md';
import Newsletter from '../components/Newsletter';
import axios from 'axios';

const ProductListing = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const nameQuery = params.get('name') || '';
  const categoryQuery = params.get('category') || '';

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const clearFilters = () => {
    navigate('/listing');
  };

  const removeFilter = (type) => {
    const newParams = new URLSearchParams(location.search);
    newParams.delete(type);
    navigate(`/listing?${newParams.toString()}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/products?name=${encodeURIComponent(nameQuery)}&category=${encodeURIComponent(categoryQuery)}&_t=${Date.now()}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [location.search, nameQuery, categoryQuery]);

  return (
    <div style={{ backgroundColor: '#F7F8FA', minHeight: '100vh', padding: '1rem 0' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div style={{ padding: '1rem 0', color: '#8B96A5', fontSize: '0.95rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link> 
          {categoryQuery && ` > ${categoryQuery}`} 
          {nameQuery && ` > Search: ${nameQuery}`}
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
                {categories.map((cat, index) => (
                  <li 
                    key={index} 
                    style={{ cursor: 'pointer', color: categoryQuery === cat ? '#0D6EFD' : 'inherit' }} 
                    onClick={() => navigate(`/listing?category=${encodeURIComponent(cat)}`)}
                  >
                    {cat}
                  </li>
                ))}
                <li style={{ color: '#0D6EFD', cursor: 'pointer' }} onClick={clearFilters}>All Categories</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem', borderTop: '1px solid #E3E8EE', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600' }}>Brands</h4>
                <span style={{ fontSize: '1.2rem', color: '#8B96A5' }}>^</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', color: '#505050' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Samsung</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Apple</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Huawei</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Pocco</label>
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
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><input type="checkbox" /> Metallic</label>
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
                  <div style={{ position: 'absolute', left: '0%', right: '0%', height: '100%', backgroundColor: '#0D6EFD' }}></div>
                  <div style={{ position: 'absolute', left: '0%', top: '-8px', width: '20px', height: '20px', backgroundColor: 'white', border: '2px solid #0D6EFD', borderRadius: '50%' }}></div>
                  <div style={{ position: 'absolute', right: '0%', top: '-8px', width: '20px', height: '20px', backgroundColor: 'white', border: '2px solid #0D6EFD', borderRadius: '50%' }}></div>
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
                    <input type="checkbox" />
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
                {products.length} items found
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
              {categoryQuery && (
                <div style={{ backgroundColor: 'white', border: '1px solid #DEE2E7', color: '#1C1C1C', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Category: {categoryQuery} <span onClick={() => removeFilter('category')} style={{ color: '#8B96A5', cursor: 'pointer', fontSize: '1.1rem' }}>×</span>
                </div>
              )}
              {nameQuery && (
                <div style={{ backgroundColor: 'white', border: '1px solid #DEE2E7', color: '#1C1C1C', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Search: {nameQuery} <span onClick={() => removeFilter('name')} style={{ color: '#8B96A5', cursor: 'pointer', fontSize: '1.1rem' }}>×</span>
                </div>
              )}
              {(categoryQuery || nameQuery) && (
                <span onClick={clearFilters} style={{ color: '#0D6EFD', fontSize: '0.9rem', alignSelf: 'center', cursor: 'pointer', marginLeft: '0.5rem' }}>Clear all filter</span>
              )}
            </div>


            {/* Product Rendering */}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '3rem' }}>Loading products...</div>
            ) : products.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem' }}>No products found.</div>
            ) : viewMode === 'list' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {products.map((product, index) => (
                  <div key={`${product._id}-${index}`} style={{ 
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
                    
                    <div 
                      style={{ width: '210px', height: '210px', minWidth: '210px', marginRight: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      onClick={() => navigate(`/details/${product._id}`)}
                    >
                      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <h4 
                        style={{ fontSize: '1.1rem', fontWeight: '500', color: '#1C1C1C', marginBottom: '1rem', maxWidth: '80%', cursor: 'pointer' }}
                        onClick={() => navigate(`/details/${product._id}`)}
                      >
                        {product.name}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1C1C1C' }}>${product.price}</span>
                        {product.oldPrice && <span style={{ color: '#8B96A5', textDecoration: 'line-through' }}>${product.oldPrice}</span>}
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem', color: '#8B96A5', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', color: '#FF9017', alignItems: 'center' }}>
                          <MdStar /><MdStar /><MdStar /><MdStar /><MdStarBorder />
                          <span style={{ marginLeft: '0.4rem', color: '#FF9017' }}>4.5</span>
                        </div>
                        <span style={{ fontSize: '1.2rem' }}>•</span>
                        <span>154 orders</span>
                        <span style={{ fontSize: '1.2rem' }}>•</span>
                        <span style={{ color: '#00B517' }}>Free Shipping</span>
                      </div>

                      <p style={{ color: '#505050', lineHeight: '1.5', marginBottom: '1rem', maxWidth: '90%', fontSize: '0.95rem' }}>
                        {product.description}
                      </p>

                      <span 
                        style={{ color: '#0D6EFD', fontWeight: '600', cursor: 'pointer' }}
                        onClick={() => navigate(`/details/${product._id}`)}
                      >
                        View details
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {products.map((product, index) => (
                  <div key={`${product._id}-${index}`} style={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #DEE2E7', 
                    borderRadius: '6px', 
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}>
                    <div 
                      style={{ height: '230px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #EEE', margin: '-1rem -1rem 1rem -1rem', padding: '1rem', cursor: 'pointer' }}
                      onClick={() => navigate(`/details/${product._id}`)}
                    >
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
                        <span>4.5</span>
                      </div>

                      <h4 
                        style={{ fontSize: '1rem', fontWeight: '400', color: '#505050', lineHeight: '1.4', cursor: 'pointer' }}
                        onClick={() => navigate(`/details/${product._id}`)}
                      >
                        {product.name}
                      </h4>
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
