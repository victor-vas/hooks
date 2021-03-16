import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';

const initialState = {
  number: 0,
  user: null,
};

const reducer = (
  state: { number: number; user: { name: string } | null },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case 'INCREMENT_NUMBER':
      return { ...state, number: state.number + 1 };
    case 'LOGIN':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = () => {
    dispatch({ type: 'LOGIN', payload: name });
  };

  const icrementNumber = () => {
    dispatch({ type: 'INCREMENT_NUMBER' });
  };

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{state.user?.name || 'Usuário deslogado'}</span>
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" onClick={login}>
          Login
        </button>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={icrementNumber}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exemplo" />
      <Link to="/cart" className="example-link">
        {`>>> Cart`}
      </Link>
    </div>
  );
};

export default UseReducer;
