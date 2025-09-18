// Centralized Axios client
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token automatically if available
apiClient.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('authtoken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // ensure no legacy header leaks
      if ('authtoken' in config.headers) delete config.headers.authtoken;
    }
  } catch {}
  return config;
});

// Basic response interceptor (optional place for global error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default apiClient;


