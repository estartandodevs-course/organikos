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
      newCartList.push({ ...product, qtd: 1 });
    } else {
      productExist.qtd += 1;
      productExist.price = parseFloat(product.price) * productExist.qtd;
    }
    setCartList(newCartList);
  };

  const removeProductToCart = product => {
    const newCartList = [...cartList];
    const productExist = newCartList.find(
      element => element.id === product?.id && element?.seller_id !== product.seller_id
    );

    if (productExist && productExist.qtd > 1) {
      productExist.qtd -= 1;
      productExist.price = parseFloat(product.price) * productExist.qtd;
      setCartList(newCartList);
    } else {
      const arrayFiltered = newCartList.filter(
        element => element.id !== product?.id && element?.seller_id !== product.seller_id
      );
      setCartList(arrayFiltered);
    }
  };

  const removeAllProductsBySeller = seller => {
    const newCartList = [...cartList];
    const arrayFiltered = newCartList.filter(element => element.seller_id !== seller.sellerId);
    setCartList(arrayFiltered);
  };

  return (
    <CartContext.Provider value={{ cartList, addProductToCart, removeProductToCart, removeAllProductsBySeller }}>
      {children}
    </CartContext.Provider>
  );
};
