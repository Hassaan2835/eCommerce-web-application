import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProducts from './pages/admin/AdminProducts'
import AdminAddProduct from './pages/admin/AdminAddProduct'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Success from './pages/Success'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Storefont Routes */}
          <Route path="/*" element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listing" element={<ProductListing />} />
                <Route path="/details/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/success" element={<Success />} />
              </Routes>
              <Footer />
            </>
          } />

          {/* Admin Routes (Protected) */}
          <Route element={<ProtectedRoute adminOnly={true} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="add-product" element={<AdminAddProduct />} />
              <Route path="edit-product/:id" element={<AdminAddProduct />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
