import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333', // for web
  // baseURL: 'http://10.0.2.2:3333', // for androidStudio emulator
  // baseURL: 'http://ip:3333', // usb
  baseURL: 'http://10.0.3.2:3333', // for genymotion
});

export default api;
