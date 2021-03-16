import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
const url = 'https://course-api.com/react-useReducer-cart-project';

interface IAppProvider {
  children: React.ReactNode;
}

export type InitialState = {
  loading: boolean;
  cart: {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
  }[];
  total: number;
  amount: number;
};

interface IValue {
  loading: boolean;
  cart: {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
  }[];
  total: number;
  amount: number;
  clearCart?: () => void;
  remove?: (id: number) => void;
  increase?: (id: number) => void;
  decrease?: (id: number) => void;
  toggleAmount?: (id: number, type: string) => void;
}

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppContext = React.createContext<IValue>(initialState);

const AppProvider = ({ children }: IAppProvider) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const remove = (id: number) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id: number) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id: number) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  const toggleAmount = (id: number, type: string) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  const value: IValue = {
    ...state,
    clearCart,
    remove,
    increase,
    decrease,
    toggleAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
