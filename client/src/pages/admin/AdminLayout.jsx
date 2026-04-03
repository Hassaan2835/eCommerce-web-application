import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { MdDashboard, MdInventory, MdAddCircle, MdLogout, MdArrowBack } from 'react-icons/md';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { path: '/admin', icon: <MdDashboard />, label: 'Dashboard' },
    { path: '/admin/products', icon: <MdInventory />, label: 'Products' },
    { path: '/admin/add-product', icon: <MdAddCircle />, label: 'Add Product' },
  ];

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="admin-container" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F7F8FA' }}>
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          onClick={closeSidebar}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ 
        width: '260px', 
        backgroundColor: '#1C1C1C', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 1001,
        transition: 'all 0.3s'
      }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', margin: 0, color: '#0D6EFD', fontWeight: 'bold' }}>Admin Panel</h2>
          <button className="show-mobile" onClick={closeSidebar} style={{ background: 'none', border: 'none', color: '#8B96A5', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}>×</button>
        </div>
        
        <nav style={{ flex: 1, padding: '1.5rem 0' }}>
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              onClick={closeSidebar}
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
          <Link to="/" onClick={closeSidebar} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#8B96A5', textDecoration: 'none', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
            <MdArrowBack /> <span>Back to Store</span>
          </Link>
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FA3434', cursor: 'pointer', fontSize: '0.95rem' }}
            onClick={() => {
              closeSidebar();
              logout();
              navigate('/login');
            }}
          >
            <MdLogout /> <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main" style={{ flex: 1, marginLeft: '260px', padding: '2rem', transition: 'all 0.3s' }}>
        <header className="admin-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              className="show-mobile btn-icon" 
              onClick={() => setIsSidebarOpen(true)}
              style={{ padding: '0.5rem', display: 'none', background: 'white', border: '1px solid #DEE2E7', borderRadius: '6px', fontSize: '1.2rem', cursor: 'pointer' }}
            >
              ☰
            </button>
            <h1 className="admin-page-title" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1C1C1C', margin: 0 }}>
              {menuItems.find(m => m.path === location.pathname)?.label || 'Dashboard'}
            </h1>
          </div>
          <div className="admin-user-info" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="hide-mobile" style={{ color: '#505050', fontSize: '0.95rem' }}>Welcome, Admin</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0D6EFD', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              A
            </div>
          </div>
        </header>

        <div className="admin-page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
