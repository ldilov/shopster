export const paypalPaymentMethod = {
  type: String,
  required: true
};

export const paypalPaymentResult = {
  id: {
    type: String
  },
  status: {
    type: String
  },
  update_time: {
    type: String
  },
  email_address: {
    type: String
  }
};
