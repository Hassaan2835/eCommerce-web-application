const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes
exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    console.warn('Auth Middleware: No token provided');
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    console.log('Auth Middleware: Verifying token...');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = await User.findById(decoded.id).select('-password');
    console.log('Auth Middleware: User authenticated:', req.user?.email);
    next();
  } catch (error) {
    console.error('Auth Middleware: Token verification failed:', error.message);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// Middleware for admin access only
exports.adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};
