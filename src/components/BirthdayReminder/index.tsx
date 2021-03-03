import React, { useState } from 'react';
import data from './data';
import List from './List';
import { Wrapper } from './styled';

function App() {
  const [peoples, setPeoples] = useState(data);

  return (
    <Wrapper>
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        <List peoples={peoples} />
        <button onClick={() => setPeoples([])}>clear all</button>
      </section>
    </Wrapper>
  );
}

export default App;
