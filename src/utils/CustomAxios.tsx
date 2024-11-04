import axios from 'axios';
import { setCookie, getCookie } from './cookies'


const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCsrfToken = async () => {
  try {
    const response = await axios.get(apiUrl + '/get-csrf-token/');
    const csrfToken = response.data.csrfToken;
    setCookie("csrftoken", csrfToken)
  } catch (error) {
    console.error('Failed to fetch CSRF token:', error);
  }
};

const customAxios = axios.create({
  baseURL: apiUrl,
});

export default customAxios;
