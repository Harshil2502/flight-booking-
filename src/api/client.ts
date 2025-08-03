import axios from 'axios';
import { API_BASE_URL } from './config';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  response => response,
  error => {
    // Centralized error handling
    // You can customize this
    return Promise.reject(error);
  }
);

export default api;