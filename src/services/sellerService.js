import { sellerApi } from './sellerApi';

export const getSeller = sellerId => {
  return sellerApi.get(`/${sellerId}`);
};
