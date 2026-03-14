import axios from 'axios';

import type { AxiosError, AxiosInstance, /*  AxiosRequestConfig, */ AxiosResponse } from 'axios';

import { BASE_URL } from './globals';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
/**
 *  Add a request interceptor
 */
axiosInstance.interceptors.request.use(
  async config => {
    // Get current language from i18n
    config.headers['Accept-Language'] = 'en';

    // const token = await getKeycloakToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 *  Add a response interceptor
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (!error.response) {
      console.error('Network error or request was not completed.');

      return Promise.reject(error);
    }

    const { status, data } = error.response;

    switch (status) {
      case 401:
        handleUnauthorized();
        break;
      case 500:
        console.error('Internal Server Error:', data);
        break;
      default:
        console.error('Request failed:', status, data);
    }

    return Promise.reject(error);
  }
);
function handleUnauthorized() {
  // Handle unauthorized access (e.g., redirect to login page)
  console.error('Unauthorized access - redirecting to login page');
  // window.location.href = '/login'; // Uncomment this line to redirect to the login page
}

export default axiosInstance;
