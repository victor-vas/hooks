import React, { useState } from 'react';

interface StoreProps {
  children: React.ReactNode;
}

export interface IValue {
  text: string;
  number: number;
  setNumber: (number: number) => void;
  setText: (text: string) => void;
}

const initialState = {
  text: 'Context API + Hooks',
  number: 1234,
};

export const AppContext = React.createContext<IValue | null>(null);

const Store = ({ children }: StoreProps) => {
  const [state, setState] = useState(initialState);

  const updateState = (key: string, value: string | number): void => {
    setState({ ...state, [key]: value });
  };

  return (
    <AppContext.Provider
      value={{
        text: state.text,
        number: state.number,
        setNumber: (number) => updateState('number', number),
        setText: (text) => updateState('text', text),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
