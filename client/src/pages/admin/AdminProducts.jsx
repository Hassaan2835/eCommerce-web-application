import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api/config';
import { MdEdit, MdDelete, MdSearch, MdAdd, MdCheck, MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/products?name=${searchTerm}`);
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);

  const handleDelete = async (id) => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      const token = savedUser?.token;
      await axios.delete(`${API_BASE_URL}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProducts(products.filter(p => p._id !== id));
      setConfirmDeleteId(null);
    } catch (error) {
      const msg = error.response?.data?.message || error.message;
      setConfirmDeleteId(null);
      alert('Deletion failed: ' + msg);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #DEE2E7' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ position: 'relative', width: '350px' }}>
          <MdSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#8B96A5', fontSize: '1.2rem' }} />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.7rem 1rem 0.7rem 2.5rem', 
              border: '1px solid #DEE2E7', 
              borderRadius: '8px', 
              outline: 'none' 
            }}
          />
        </div>
        <button 
          onClick={() => navigate('/admin/add-product')}
          style={{ 
            backgroundColor: '#0D6EFD', 
            color: 'white', 
            border: 'none', 
            padding: '0.7rem 1.2rem', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          <MdAdd /> Add Product
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #DEE2E7' }}>
              <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Product</th>
              <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Category</th>
              <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Price</th>
              <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Stock</th>
              <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5" style={{ padding: '2rem', textAlign: 'center' }}>Loading...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan="5" style={{ padding: '2rem', textAlign: 'center' }}>No products found</td></tr>
            ) : products.map((p) => (
              <tr key={p._id} style={{ borderBottom: '1px solid #F7F8FA' }}>
                <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={p.image} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px' }} />
                  <span style={{ fontWeight: '500' }}>{p.name}</span>
                </td>
                <td style={{ padding: '1rem' }}>{p.category}</td>
                <td style={{ padding: '1rem', fontWeight: '600' }}>${p.price}</td>
                <td style={{ padding: '1rem' }}>{p.stock}</td>
                <td style={{ padding: '1rem' }}>
                  {confirmDeleteId === p._id ? (
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#606060' }}>Sure?</span>
                      <button
                        onClick={() => handleDelete(p._id)}
                        style={{ padding: '0.4rem 0.7rem', border: 'none', borderRadius: '6px', backgroundColor: '#FA3434', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.85rem' }}
                      >
                        <MdCheck /> Yes
                      </button>
                      <button
                        onClick={() => setConfirmDeleteId(null)}
                        style={{ padding: '0.4rem 0.7rem', border: '1px solid #DEE2E7', borderRadius: '6px', backgroundColor: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}
                      >
                        <MdClose />
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        onClick={() => navigate(`/admin/edit-product/${p._id}`)}
                        style={{ padding: '0.5rem', border: '1px solid #DEE2E7', borderRadius: '6px', backgroundColor: 'white', cursor: 'pointer', display: 'flex', color: '#0D6EFD' }}
                      >
                        <MdEdit />
                      </button>
                      <button 
                        onClick={() => setConfirmDeleteId(p._id)}
                        style={{ padding: '0.5rem', border: '1px solid #DEE2E7', borderRadius: '6px', backgroundColor: 'white', cursor: 'pointer', display: 'flex', color: '#FA3434' }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
