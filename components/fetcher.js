import Axios from 'axios';

let url = '';

process.env.NODE_ENV !== 'production' ? (url = 'http://localhost:3030') : (url = 'https://api.ayushgoyal.dev');

const api = Axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
