import { cartReducers } from '@/shared/reducers/cartReducers';
import { createContext, useReducer } from 'react';

const initialState = {
  count: 0,
  products: {},
  cartOpen: false,
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducers, initialState);

  return (
    <GlobalContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
