import mongoose from 'mongoose';
import { genericBooleanStatusObject, genericDateAtObject, genericPriceObject } from './common/generics.js';
import { paypalPaymentMethod, paypalPaymentResult } from './common/paypal.js';


const orderItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

const shippingAddressObject = {
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
};

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderItems: [orderItemSchema],
  shippingAddress: shippingAddressObject,
  paymentMethod: paypalPaymentMethod,
  paymentResult: paypalPaymentResult,
  taxPrice: genericPriceObject,
  shippingPrice: genericPriceObject,
  totalPrice: genericPriceObject,
  isPaid: genericBooleanStatusObject,
  isDelivered: genericBooleanStatusObject,
  paidAt: genericDateAtObject,
  deliveredAt: genericDateAtObject
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
