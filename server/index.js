const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

const { protect, adminOnly } = require('./middleware/auth');

app.get('/api/stats', protect, adminOnly, async (req, res) => {
  try {
    const Product = require('./models/Product');
    const totalProducts = await Product.countDocuments();
    const categories = await Product.distinct('category');
    const products = await Product.find({}, 'price stock');
    const totalStockValue = products.reduce((acc, p) => acc + (p.price * p.stock), 0);
    
    res.json({
      totalProducts,
      totalCategories: categories.length,
      totalStockValue: Math.round(totalStockValue * 100) / 100
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
