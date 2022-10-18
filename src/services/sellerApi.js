import axios from 'axios';

export const sellerApi = axios.create({
  baseURL: 'https://private-anon-186a9d3964-organikos.apiary-mock.com/api/seller',
});
