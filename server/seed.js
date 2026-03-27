const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

const sampleProducts = [
  {
    name: 'Sony WH-1000XM4 Headphones',
    price: 348,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    description: 'Industry-leading noise canceling overhead headphones with Mic for phone-call and Alexa voice control.',
    category: 'Electronics',
    stock: 25,
  },
  {
    name: 'Mechanical Gaming Keyboard',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop',
    description: 'RGB Backlit Mechanical Gaming Keyboard with high quality switches for gaming and office.',
    category: 'Electronics',
    stock: 50,
  },
  {
    name: 'Logitech G502 Hero Mouse',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
    description: 'High performance wired gaming mouse with HERO 25K sensor.',
    category: 'Electronics',
    stock: 80,
  },
  {
    name: 'Minimalist Leather Watch',
    price: 120,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop',
    description: 'A sleek and minimalist leather watch for any occasion.',
    category: 'Accessories',
    stock: 15,
  },
  {
    name: 'Cotton Oversized Hoodie',
    price: 45,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
    description: 'Comfortable oversized cotton hoodie in multiple colors.',
    category: 'Clothing',
    stock: 100,
  },
  {
    name: 'Epson EcoTank Pro ET-5850',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1000&auto=format&fit=crop',
    description: 'Wireless Color All-in-One Supertank Printer with Ethernet.',
    category: 'Electronics',
    stock: 10,
  }
];

const seedDB = async () => {
  try {
    console.log('Connecting to MongoDB for seeding...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    console.log('Starting seeding...');
    await Product.deleteMany();
    console.log('Cleared existing products');
    
    await Product.insertMany(sampleProducts);
    console.log('Inserted sample products');

    await mongoose.connection.close();
    console.log('MongoDB connection closed after seeding');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
