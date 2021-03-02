import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import SectionTitle from '../../components/SectionTitle';

const UseState = () => {
  const [count, setContent] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #1" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button
            className="btn"
            onClick={() => setContent((current) => current - 10)}
          >
            -10
          </button>
          <button className="btn" onClick={() => setContent(count - 1)}>
            -
          </button>
          <button className="btn" onClick={() => setContent(0)}>
            0
          </button>
          <button className="btn" onClick={() => setContent(count + 1)}>
            +
          </button>
          <button
            className="btn"
            onClick={() => setContent((current) => current + 10)}
          >
            +10
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #2" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="text">{name}</span>
      <SectionTitle title="Exemplo" />
      <Link to="/birthday-reminder" className="example-link">
        {`>>>BirthdayReminder`}
      </Link>
    </div>
  );
};

export default UseState;
