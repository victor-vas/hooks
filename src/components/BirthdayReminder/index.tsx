import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [peoples, setPeoples] = useState(data);

  return (
    <main className="birthday-main">
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        <List peoples={peoples} />
        <button onClick={() => setPeoples([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
