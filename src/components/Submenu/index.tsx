import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { AppProvider } from './context';
import { Wrapper } from './styled';

function App() {
  return (
    <AppProvider>
      <Wrapper>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </Wrapper>
    </AppProvider>
  );
}

export default App;
