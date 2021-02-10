import React from 'react';

export interface IData {
  text: string;
  number: number;
}

export const data = {
  number: 123,
  text: 'Context API',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataContext: any = React.createContext(data);
