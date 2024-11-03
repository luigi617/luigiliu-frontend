import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL;

export const getCsrfToken = (): string | null => {
  const match = document.cookie.match(new RegExp('(^|;)\\s*csrftoken\\s*=\\s*([^;]+)'));
  return match ? match.pop() || null : null;
};


const customAxios = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // Important to allow sending cookies with requests
});

customAxios.interceptors.request.use(
  (config) => {
    const csrfToken = getCsrfToken();
    console.log(csrfToken)
    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default customAxios;
