import React from 'react';
import Review from './Review';
import { Wrapper } from './styled';

function App() {
  return (
    <Wrapper>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </Wrapper>
  );
}

export default App;
