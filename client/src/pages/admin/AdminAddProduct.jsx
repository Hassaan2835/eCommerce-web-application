import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api/config';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack, MdSave } from 'react-icons/md';

const AdminAddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    stock: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`${API_BASE_URL}/products/${id}`);
          setFormData(res.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEdit) {
        await axios.put(`${API_BASE_URL}/products/${id}`, formData);
      } else {
        await axios.post(`${API_BASE_URL}/products`, formData);
      }
      navigate('/admin/products');
    } catch (error) {
      alert(error.response?.data?.message || 'Error saving product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <button 
        onClick={() => navigate('/admin/products')}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: 'none', backgroundColor: 'transparent', color: '#8B96A5', cursor: 'pointer', marginBottom: '1.5rem', fontSize: '0.95rem' }}
      >
        <MdArrowBack /> Back to Products
      </button>

      <div className="admin-form-container" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #DEE2E7' }}>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1C1C1C', fontWeight: '500' }}>Product Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '0.7rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1C1C1C', fontWeight: '500' }}>Category</label>
              <input 
                type="text" 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                required 
                placeholder="e.g. Electronics, Clothing"
                style={{ width: '100%', padding: '0.7rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1C1C1C', fontWeight: '500' }}>Price ($)</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '0.7rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1C1C1C', fontWeight: '500' }}>Stock</label>
              <input 
                type="number" 
                name="stock" 
                value={formData.stock} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '0.7rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1C1C1C', fontWeight: '500' }}>Image URL</label>
            <input 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '0.7rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#1C1C1C', fontWeight: '500' }}>Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
              rows="5"
              style={{ width: '100%', padding: '0.7rem', border: '1px solid #DEE2E7', borderRadius: '8px', outline: 'none', resize: 'vertical' }}
            ></textarea>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                flex: 1,
                backgroundColor: '#0D6EFD', 
                color: 'white', 
                border: 'none', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <MdSave /> {loading ? 'Saving...' : isEdit ? 'Update Product' : 'Save Product'}
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/admin/products')}
              style={{ 
                padding: '0.8rem 1.5rem', 
                backgroundColor: 'white', 
                border: '1px solid #DEE2E7', 
                borderRadius: '8px', 
                color: '#505050',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProduct;
