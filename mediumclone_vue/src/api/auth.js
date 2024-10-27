import axios from './axios';

const register = (credentials) => axios.post('/users', { user: credentials });
const login = (credentials) => axios.post('/users/login', { user: credentials });

export default { register, login };
