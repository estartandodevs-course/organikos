import { api } from './api';

export const getAllSeller = () => {
  return api.get(`/seller`);
};

export const getSeller = id => {
  return api.get(`/seller/${id}`);
};

export const getProductsBySeller = id => {
  return api.get(`/product/${id}`);
};

export const getUserByEmail = email => {
  return api.post(`/user/login`, { email });
};

export const createUser = body => {
  return api.post(`/user`, { ...body });
};
