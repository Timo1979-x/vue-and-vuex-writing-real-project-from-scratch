import axios from './axios';

const register = (credentials) => axios.post('/users', { user: credentials });

export default {
  register,
};
