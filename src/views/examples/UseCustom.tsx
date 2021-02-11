import React from 'react';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const UseRef = () => {
  const [count, inc, dec] = useCounter();
  const { data } = useFetch(
    'http://files.cod3r.com.br/curso-react/estados.json',
  );

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={dec as () => void}>
            -
          </button>
          <button className="btn" onClick={inc as () => void}>
            +
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <ul>
          {data?.map(({ nome, sigla }) => (
            <li key={nome}>
              {nome} - {sigla}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseRef;
