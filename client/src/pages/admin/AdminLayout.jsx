import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { MdDashboard, MdInventory, MdAddCircle, MdLogout, MdArrowBack } from 'react-icons/md';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin', icon: <MdDashboard />, label: 'Dashboard' },
    { path: '/admin/products', icon: <MdInventory />, label: 'Products' },
    { path: '/admin/add-product', icon: <MdAddCircle />, label: 'Add Product' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F7F8FA' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: '#1C1C1C', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh'
      }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #333' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#0D6EFD' }}>Admin Panel</h2>
        </div>
        
        <nav style={{ flex: 1, padding: '1.5rem 0' }}>
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                padding: '1rem 1.5rem', 
                color: location.pathname === item.path ? '#0D6EFD' : '#8B96A5',
                textDecoration: 'none',
                backgroundColor: location.pathname === item.path ? 'rgba(13, 110, 253, 0.1)' : 'transparent',
                borderLeft: location.pathname === item.path ? '4px solid #0D6EFD' : '4px solid transparent',
                transition: 'all 0.3s'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <span style={{ fontWeight: '500' }}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div style={{ padding: '1.5rem', borderTop: '1px solid #333' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#8B96A5', textDecoration: 'none', marginBottom: '1rem' }}>
            <MdArrowBack /> <span>Back to Store</span>
          </Link>
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FA3434', cursor: 'pointer' }}
            onClick={() => {
              logout();
              navigate('/login');
            }}
          >
            <MdLogout /> <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: '260px', padding: '2rem' }}>
        <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1C1C1C' }}>
            {menuItems.find(m => m.path === location.pathname)?.label || 'Dashboard'}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#505050' }}>Welcome, Admin</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#DEE2E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontWeight: 'bold' }}>A</span>
            </div>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
