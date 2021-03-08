import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';

const UseRef = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const count = useRef(0);
  const myInput1 = useRef<HTMLInputElement>(null);
  const myInput2 = useRef<HTMLInputElement>(null);

  const mergeString = (string1: string, string2: string) =>
    [...string1].map((letter, index) => `${letter}${string2[index] || ''}`);

  useEffect(() => {
    count.current++;
    myInput2.current?.focus();
  }, [value1]);

  useEffect(() => {
    count.current++;
    myInput1.current?.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">
            Valor: {mergeString(value1, value2)} [
            <span className="text red">{count.current}</span>]
          </span>
        </div>
        <input
          type="text"
          className="input"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          ref={myInput1}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          ref={myInput2}
        />
      </div>
      <SectionTitle title="Exemplo" />
      <Link to="/navbar" className="example-link">
        {`>>> Navbar`}
      </Link>
    </div>
  );
};

export default UseRef;
