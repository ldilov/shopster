import axios from 'axios';

export const ApiClient = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 30000
});
