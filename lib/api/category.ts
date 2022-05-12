import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

export const getCategory = async () => {
  const { data } = await axios.get('/api/query');

  return data;
}