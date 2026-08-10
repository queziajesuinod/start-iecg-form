import axios from 'axios';

// URL da API do portal-iecg
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3005';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
