import axios from '../utils/authorizeAxios';

export const loginApi = async data => {
  return axios.post('/api/loginmobie', data);
};
