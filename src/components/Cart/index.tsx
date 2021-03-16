import React from 'react';
import { useGlobalContext } from './context';

import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { Wrapper } from './styled';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Wrapper>
      <Navbar />
      <CartContainer />
    </Wrapper>
  );
}

export default App;
