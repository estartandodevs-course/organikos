import { api } from './api';

export const getAllSeller = () => {
  return api.get(`/seller`);
};

export const getSeller = id => {
  return api.get(`/seller/${id}`);
};
