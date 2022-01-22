import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();

import productsRoutes from './routes/products.routes.js';

import PathParamValidator from './middlewares/pathParamValidator.js';
import ErrorHandler from './middlewares/errorHandler.js';

connectDB();

const app = express();

app.use(PathParamValidator);
app.use(ErrorHandler);

app.get('/', (req, res) => {
  res.send('API is running ...')
});

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
