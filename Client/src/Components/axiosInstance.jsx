// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', // Use VITE_ prefix for environment variables
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace this with your server URL
});

export default axiosInstance;
