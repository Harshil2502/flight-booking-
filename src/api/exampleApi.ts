import api from './client';

export const fetchExampleData = async () => {
  const response = await api.get('/example');
  return response.data;
};