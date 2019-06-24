import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://eddie-backend.herokuapp.com/',
  responseType: 'json'
});