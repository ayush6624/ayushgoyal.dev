let BASE_URL = '';

BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ayushgoyal.dev'
    : 'http://localhost:3000';

export { BASE_URL };
