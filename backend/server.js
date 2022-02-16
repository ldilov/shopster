import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

import productsRoutes from './routes/products.routes.js';

import PathParamValidator from './middlewares/pathParamValidator.js';
import ErrorHandler from './middlewares/errorHandler.js';

connectDB();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.disable('x-powered-by')

app.use(cors(corsOptions))
app.use(helmet());
app.use(PathParamValidator);
app.use(ErrorHandler);

app.get('/', (req, res) => {
  res.send('API is running ...')
});

app.use('/api/product-list', productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
