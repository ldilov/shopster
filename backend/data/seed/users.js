import * as crypto from 'crypto';

const DUMMY_PASSWORD = 'test';

const users = [
  {
    name: 'Admin User',
    email: 'admin@shopster.com',
    password: crypto.createHash('sha256').update(DUMMY_PASSWORD).digest('hex'),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@shopster.com',
    password: crypto.createHash('sha256').update(DUMMY_PASSWORD).digest('hex'),
  },
  {
    name: 'Jane Doe',
    email: 'jane@shopster.com',
    password: crypto.createHash('sha256').update(DUMMY_PASSWORD).digest('hex'),
  }
];

export default users;
