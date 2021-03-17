import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';
import { DataContext } from '../../data/DataContext';
import { AppContext, IValue } from '../../data/Store';

const UseContext = () => {
  // eslint-disable-next-line prettier/prettier
  const {state, setState} = useContext(DataContext);
  const { text, number, setNumber, setText } = useContext(AppContext) as IValue;

  const addNumber = (delta: number) => {
    setState({ ...state, number: state.number + delta });
  };

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #1" />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #2" />
      <div className="center">
        <span className="text">{text}</span>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exemplo" />
      <Link to="/sidebar-modal" className="example-link">
        {`>>> Sidebar / Modal`}
      </Link>
      <Link to="/submenu" className="example-link">
        {`>>> Submenu`}
      </Link>
      <Link to="/cocktail" className="example-link">
        {`>>> Cocktail`}
      </Link>
    </div>
  );
};

export default UseContext;
