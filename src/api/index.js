import axios from '../utils/authorizeAxios';

export const getStatisticalData = async data => {
  const response = await axios.post('/api/auth/login', data);
  return response.data;
};
