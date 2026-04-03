const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';
// Sanitization: Remove extra spaces and accidental brackets < >
MONGODB_URI = MONGODB_URI.trim().replace(/[<>]/g, '');

const sampleProducts = [
  {
    name: 'Smart Car OBD2 Scanner',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1598128558393-70ff22446a86?q=80&w=1000&auto=format&fit=crop',
    description: 'Advanced diagnostic tool for all modern cars.',
    category: 'Automobiles',
    stock: 45,
  },
  {
    name: 'Vintage Leather Jacket',
    price: 150,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop',
    description: 'Premium quality leather jacket for men.',
    category: 'Clothes and wear',
    stock: 12,
  },
  {
    name: 'Ergonomic Office Chair',
    price: 220,
    image: 'https://images.unsplash.com/photo-1505797149033-c199adfbbf90?q=80&w=1000&auto=format&fit=crop',
    description: 'Comfortable chair designed for long hours of work.',
    category: 'Home interiors',
    stock: 20,
  },
  {
    name: 'Gaming Setup Bundle',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete gaming setup with PC, Monitor and Keyboard.',
    category: 'Computer and tech',
    stock: 5,
  },
  {
    name: 'Cordless Power Drill',
    price: 85,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1000&auto=format&fit=crop',
    description: 'High torque cordless drill with extra battery.',
    category: 'Tools, equipments',
    stock: 30,
  },
  {
    name: 'Adjustable Dumbbell Set',
    price: 180,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    description: 'Space-saving adjustable dumbbells for home gym.',
    category: 'Sports and outdoor',
    stock: 25,
  },
  {
    name: 'Self-Cleaning Litter Box',
    price: 450,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: 'Automated litter box for hassle-free pet care.',
    category: 'Animal and pets',
    stock: 15,
  },
  {
    name: 'Heavy Duty Metal Lathe',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1000&auto=format&fit=crop',
    description: 'Precision metalworking lathe for industrial use.',
    category: 'Machinery tools',
    stock: 3,
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
