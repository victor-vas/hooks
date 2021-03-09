import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import { Wrapper } from './styled';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <Wrapper>
        <Home />
        <Modal />
        <Sidebar />
      </Wrapper>
    </AppProvider>
  );
}

export default App;
