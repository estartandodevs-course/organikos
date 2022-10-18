import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://private-anon-186a9d3964-organikos.apiary-mock.com/api',
});
