import React, { useMemo, useState } from 'react';
// import React, { useEffect,  useState } from 'react';
import PageTitle from '../../components/PageTitle';

const UseMemo = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  // const [result, setResult] = useState(0);

  const sum = (number1: number, number2: number) => {
    const future = Date.now() + 2000;

    while (Date.now() < future) {
      //
    }

    return number1 + number2;
  };

  // Estratégia alternativa ao useMemo
  // useEffect(() => {
  //   setResult(sum(number1, number2));
  // }, [number1, number2]);

  const result = useMemo(() => sum(number1, number2), [number1, number2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <div className="center">
        <input
          type="number"
          className="input"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={number3}
          onChange={(e) => setNumber3(parseInt(e.target.value))}
        />
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
