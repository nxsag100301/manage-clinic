import axios from 'axios';
import {API_ROOT} from '../constant/constant';

let authorizeAxiosInstance = axios.create({
  baseURL: 'https://mobile.sixossoft.com',
});

authorizeAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(
      '[REQUEST]',
      config.method?.toUpperCase(),
      config.baseURL + config.url,
    );
    console.log('[BODY]', config.data);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
authorizeAxiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default authorizeAxiosInstance;
