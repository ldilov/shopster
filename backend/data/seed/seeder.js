import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './users.js';
import products from './products.js';

import User from '../models/UserModel.js';
import Product from '../models/ProductModel.js';
import Order from '../models/OrderModel.js';

import connectDB from '../../config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Delete phase
    await destroyData();

    // Insertion phase
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(p => ({...p, user: adminUser}));
    await Product.insertMany(sampleProducts);

    console.log(`Data imported!`.green.inverse);
  } catch (error) {
    console.error(`${ error.message }`.red.inverse);
    process.exit(1);
  }
};


const destroyData = async () => {
  try {
    // Delete phase
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(`Data destroyed!`.red.inverse);
  } catch (error) {
    console.error(`${ error.message }`.red.inverse);
    process.exit(1);
  }
};


const main = async () => {
  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
};

main()
    .then(() => {
      console.log(`Script finished successfully!`.yellow);
      process.exit();
    });
