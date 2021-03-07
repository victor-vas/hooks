import React, { useEffect } from 'react';
import { IItemList } from '.';

interface AlertProps {
  type: string;
  msg: string;
  removeAlert: (show?: boolean, type?: string, msg?: string) => void;
  list: IItemList[];
}

const Alert = ({ type, msg, removeAlert, list }: AlertProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
