import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

export const getCategory = async () => {
  const menu = await axios.get('/api/menu/query');
  const page = await axios.get('/api/page/query');

  return {
    menu: menu.data,
    page: page.data
  };
}