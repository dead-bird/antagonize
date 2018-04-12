import axios from 'axios';

export default axios.create({
  // baseURL: process.env.API,
  baseURL: 'http://localhost:3000/',
});
