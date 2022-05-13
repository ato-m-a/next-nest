import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

/* Menu & Page */
export const CategoryData = async () => {
  const { data } = await axios.get('/api/category');

  return data;
}

/* 공통 설정 */
export const CommonData = async () => {
  const { data } = await axios.get('/api/common');

  return data;
}