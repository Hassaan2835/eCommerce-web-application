import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api/config';
import { MdInventory, MdCategory, MdAttachMoney, MdHistory } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalStockValue: 0
  });
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsRes, productsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/stats`),
          axios.get(`${API_BASE_URL}/products?limit=5`)
        ]);
        setStats(statsRes.data);
        setRecentProducts(productsRes.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  const statCards = [
    { label: 'Total Products', value: stats.totalProducts, icon: <MdInventory />, color: '#0D6EFD' },
    { label: 'Categories', value: stats.totalCategories, icon: <MdCategory />, color: '#00B517' },
    { label: 'Stock Value', value: `$${stats.totalStockValue.toLocaleString()}`, icon: <MdAttachMoney />, color: '#FF9017' },
  ];

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div>
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {statCards.map((card, idx) => (
          <div key={idx} style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            border: '1px solid #DEE2E7',
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '12px', 
              backgroundColor: `${card.color}15`, 
              color: card.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem'
            }}>
              {card.icon}
            </div>
            <div>
              <p style={{ color: '#8B96A5', margin: '0 0 0.4rem 0', fontSize: '0.95rem' }}>{card.label}</p>
              <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#1C1C1C' }}>{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #DEE2E7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MdHistory /> Recent Added Products
          </h2>
          <Link to="/admin/products" style={{ color: '#0D6EFD', textDecoration: 'none', fontWeight: '500' }}>View All</Link>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid #DEE2E7' }}>
                <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Product</th>
                <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Category</th>
                <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Price</th>
                <th style={{ padding: '1rem', color: '#8B96A5', fontWeight: '500' }}>Stock</th>
              </tr>
            </thead>
            <tbody>
              {recentProducts.map((p) => (
                <tr key={p._id} style={{ borderBottom: '1px solid #F7F8FA' }}>
                  <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={p.image} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px' }} />
                    <span style={{ fontWeight: '500' }}>{p.name}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>{p.category}</td>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>${p.price}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.3rem 0.6rem', 
                      borderRadius: '12px', 
                      backgroundColor: p.stock > 10 ? '#E7F9E9' : '#FFF4E5',
                      color: p.stock > 10 ? '#00B517' : '#FF9017',
                      fontSize: '0.85rem'
                    }}>{p.stock} in stock</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
