import React, { useState } from 'react';
import data from './data';
import { Wrapper } from './styled';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <Wrapper>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            min={1}
            max={8}
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </Wrapper>
  );
}

export default App;
