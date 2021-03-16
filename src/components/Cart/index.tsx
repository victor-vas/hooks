import React from 'react';
import { AppProvider, useGlobalContext } from './context';

import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { Wrapper } from './styled';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <Wrapper>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <AppProvider>
        <Navbar />
        <CartContainer />
      </AppProvider>
    </Wrapper>
  );
}

export default App;
