import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  localStorage.setItem('dataCart', JSON.stringify([]));
  const dataCart = localStorage.getItem('dataCart');
  const [cartList, setCartList] = useState(JSON.parse(dataCart));

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cartList));
  }, [cartList]);

  const addProductToCart = product => {
    const newCartList = [...cartList];
    const productExist = newCartList.find(
      element => element?.id === product?.id && element?.seller_id === product.seller_id
    );
    if (!productExist) {
      newCartList.push({ ...product, quantity: 1, cost: product.price });
    } else {
      productExist.quantity += 1;
      productExist.cost = productExist.price * productExist.quantity;
    }
    setCartList(newCartList);
  };

  const cartTotal = cartList.reduce((acc, curr) => curr.price * curr.quantity + acc, 0);

  const removeProductToCart = product => {
    const newCartList = [...cartList];
    const productExist = newCartList.find(
      element => element.id === product?.id && element?.seller_id === product?.seller_id
    );

    if (productExist && productExist.quantity > 1) {
      productExist.quantity -= 1;
      productExist.cost = productExist.price * productExist.quantity;
    } else {
      newCartList.splice(newCartList.indexOf(productExist), 1);
    }
    setCartList(newCartList);
  };

  const getProductsBySeller = id => {
    const productsCartFiltered = cartList.filter(product => product.seller_id === id);
    return productsCartFiltered;
  };

  const removeAllProductsBySeller = seller => {
    const newCartList = [...cartList];
    const arrayFiltered = newCartList.filter(element => element.seller_id !== seller.sellerId);
    setCartList(arrayFiltered);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProductToCart,
        removeProductToCart,
        removeAllProductsBySeller,
        getProductsBySeller,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
