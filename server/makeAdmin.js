const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const makeAdmin = async (email) => {
  if (!email) {
    console.log('Please provide an email: node makeAdmin.js example@mail.com');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');
    const user = await User.findOneAndUpdate(
      { email },
      { role: 'admin' },
      { new: true }
    );

    if (user) {
      console.log(`Success! User ${email} is now an ADMIN.`);
    } else {
      console.log(`User ${email} not found.`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

makeAdmin(process.argv[2]);
