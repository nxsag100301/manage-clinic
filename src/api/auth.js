import axios from '../utils/authorizeAxios';

export const refreshTokenAPI = async () => {
  const response = await axios.get('/api/refresh-token');
  return response.data;
};
