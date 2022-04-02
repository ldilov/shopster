import mongoose from 'mongoose';
import * as crypto from 'crypto';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

userSchema.methods.matchPassword = async function(inputPassword) {
  return this.password === crypto.createHash('sha256').update(inputPassword).digest('hex');
};

const User = mongoose.model('User', userSchema);

export default User;
