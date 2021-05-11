import Axios from 'axios';

Axios.defaults.timeout = 5000;

const api = Axios.create({
  baseURL: 'http://localhost:5000/main/api/v1/'
});

export default api;