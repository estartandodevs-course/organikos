import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  localStorage.setItem('dataCart', JSON.stringify([]));
  const dataCart = localStorage.getItem('dataCart');
  const [cartList, setCartList] = useState(JSON.parse(dataCart));

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cartList));
  }, [cartList]);

  const notify = message => {
    toast(message, {
      position: 'top-center',
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const addProductToCart = product => {
    const newCartList = [...cartList];
    const productExist = newCartList.find(
      element => element?.id === product?.id && element?.seller_id === product.seller_id
    );
    if (!productExist) {
      newCartList.push({ ...product, cost: product.price, items: 1, qtdInitial: product.quantity });
    } else {
      productExist.cost += product.price;
      productExist.items += 1;
      productExist.quantity = productExist.qtdInitial * productExist.items;
    }
    setCartList(newCartList);
    notify('Item adicionado ao carrinho');
  };

  const cartTotal = cartList.reduce((acc, curr) => curr.cost + acc, 0.0);

  const removeProductToCart = product => {
    const newCartList = [...cartList];
    const productExist = newCartList.find(
      element => element.id === product?.id && element?.seller_id === product?.seller_id
    );

    if (productExist && productExist.items > 1) {
      productExist.cost -= product.price;
      productExist.items -= 1;
      productExist.quantity = productExist.qtdInitial * productExist.items;
      notify('Quantidade removida do carrinho');
    } else {
      newCartList.splice(newCartList.indexOf(productExist), 1);
      notify('Item excluído do carrinho');
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
