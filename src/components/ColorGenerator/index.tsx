import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
import { Wrapper } from './styled';

interface IColor {
  alpha: number;
  rgb: number[];
  type: string;
  weight: number;
  hex: () => string;
}

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState<IColor[]>(new Values('#f15025').all(10));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn-color" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map(({ rgb, weight, hex }, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              rgb={rgb}
              weight={weight}
              hexColor={hex}
            />
          );
        })}
      </section>
    </Wrapper>
  );
}

export default App;
