import Axios from 'axios';

let url = '';

process.env.NODE_ENV !== 'production' ? (url = 'https://api.ayushgoyal.dev') : (url = 'https://api.ayushgoyal.dev');

const api = Axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) console.log('401 fetcher');
    return Promise.reject('401 Error');
  }
);

export default api;
