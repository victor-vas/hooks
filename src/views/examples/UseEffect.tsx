import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';

function calcFatorial(n: number): number {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? 'Não Existe' : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <SectionTitle title="Exemplo" />
      <Link to="/tours" className="example-link">
        {`>>> Tours`}
      </Link>
    </div>
  );
};

export default UseEffect;
